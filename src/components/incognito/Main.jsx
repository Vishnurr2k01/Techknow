import React, { useContext } from 'react'
import { AuthContext } from '../../store/firebasecontext';
import './Login'
import Home from "./Home";
import Login from './Login';
const Main = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {user ? <Home /> : <Login />}

        </div>
    )
}

export default Main
