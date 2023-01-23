import { useState } from 'react'

import Header from './Components/Header'
import Login from './Components/Login'
import Register from './Components/Register'
import './style.css'

export default function App() {

    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)

    return (
        <div>
            <Header 
                loginModal={loginModal}
                setLoginModal={setLoginModal}
                registerModal={registerModal}
                setRegisterModal={setRegisterModal}
            />

            <Login 
                loginModal={loginModal}
                setLoginModal={setLoginModal}
            />
            <Register 
                registerModal={registerModal}
                setRegisterModal={setRegisterModal}
            />
        </div>
    )
}