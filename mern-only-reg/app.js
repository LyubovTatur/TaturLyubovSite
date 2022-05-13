const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            // useCreateIndex:true // почему то не работает..
        })
        app.listen(PORT, () => console.log('app has been started by lyubovoe on port', PORT))
    }
    catch (error) {
        console.log('server error!!', error)
        process.exit(1)
    }
}

start()