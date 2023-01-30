import { useEffect, useState } from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Header from './Components/Header'
import ListFiles from './Components/ListFiles'
import Login from './Components/Login'
import Perfil from './Components/Perfil'
import Register from './Components/Register'
import './style.css'

export default function App() {

    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)
    const [token, setToken] = useState('')

    useEffect(() => {
        console.log('Hello World')

        if (token === '') {
            console.log('Token does\'t exist')
        } else {
            console.log('Setting up the token to the hook')
        }
    }, [])

    return (
        <div>
            <Router>

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

                <Routes>
                    <Route path="/ListAllVideos" element={ <ListFiles/> }/>
                    <Route path="/test" element={<Perfil />} />
                </Routes>
            </Router>
            

            
            

        </div>
    )
}