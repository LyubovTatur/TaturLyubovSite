import React from "react"
import {Routes, Route, Navigate} from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage"
import { CreactePage } from "./pages/CreatePage"
import { DetailPage } from "./pages/DetailPage"
import { LinksPage } from "./pages/LinksPage"

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return (
            <Routes>
                <Route path='/links' element={<LinksPage/>} exact/>
                <Route path='/create' element={<CreactePage/>} exact/>
                <Route path='/detail:id' element={<DetailPage/>}/>
                <Route path="*" element={<Navigate to="/create" replace/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/' element={<AuthPage/>} exact/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}