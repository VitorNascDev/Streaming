import { useEffect, useState } from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Header from './Components/Header'
import ListFiles from './Components/ListFiles'
import Login from './Components/Modals/Login'
import Register from './Components/Modals/Register'
import Perfil from './Components/Perfil'
import UserPerfil from './Components/Perfil/UserPerfil'
import Video from './Components/Video'
import './style.css'

export default function App() {

    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)
    const [token, setToken] = useState({tokenExist: false, token: ''})

    useEffect(() => {
        // Getting the UserToken in the localstorage if exist

        if (token.token === '') {
            let UserToken = localStorage.getItem('UserToken')

            if (UserToken) {
                setToken({
                    tokenExist: true,
                    token: UserToken
                })
            }
        } else {
            localStorage.getItem('UserToken')
            setToken({
                tokenExist: true,
                token: localStorage.getItem('UserToken')
            })
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
                        setToken={setToken}
                        UserToken={token}
                    />

                    <Login 
                        loginModal={loginModal}
                        setLoginModal={setLoginModal}
                        setToken={setToken}
                        UserToken={token}
                    />

                    <Register 
                        registerModal={registerModal}
                        setRegisterModal={setRegisterModal}
                        setToken={setToken}
                        UserToken={token}
                    />

                <Routes>
                    <Route path="/Perfil/:perfil" element={<UserPerfil token={token} />} />
                    <Route path="/Home" element={ <Perfil token={token} /> }/>
                    <Route path="/ListAllVideos" element={ <ListFiles token={token}/> }/>
                    <Route path="/test/:video" element={<Video token={token}/>} />
                </Routes>
            </Router>

        </div>
    )
}