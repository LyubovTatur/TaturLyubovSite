const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'ur email is incorrect').isEmail(),
        check('password', 'should be longer than 5 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect register data'
                })
            }
            const { email, password } = req.body
            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'This email already registered here..!' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await user.save()
            res.status(201).json({ massage: 'user was created' })
        }
        catch (error) {
            res.status(500).json({ massage: 'smth wrong, try again..?' })
        }
    })

// /api/auth/login
router.post('/login',
    [
        check('email', 'ur email is incorrect').normalizeEmail().isEmail(),
        check('password', 'enter password.').exists(),
        check('password', 'should be longer than 5 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect login data'
                })
            }

            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ massage: 'user was not found' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) return res.status(400).json({ message: 'incorrect password' })

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })
        }
        catch (error) {
            res.status(500).json({ massage: 'smth wrong, try again..?' })
        }
    })

module.exports = router