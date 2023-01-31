import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login (props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function OnChange(e) {

        const changeFunc = {
            UsernameLoginInput: () => { setUsername(e.target.value)},
            PasswordLoginInput: () => { setPassword(e.target.value)}
        }

        changeFunc[e.target.id]()

    }

    function loginFunction(e) {
        e.preventDefault()

        console.log(username)

        fetch ('/Auth/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username, password
            })
        })
        .then(response => response.text())
        .then(data => {
            localStorage.setItem('UserToken', data)
            props.setToken({
                tokenExist: true,
                token: data
            })

            props.setLoginModal(false)
            setUsername('')
            setPassword('')
            navigate('/ListAllVideos')
        })
    }

    function CloseModal(e) {
        if (e.target.classList[0] === "Modal") {
            props.setLoginModal(false)
        }
    }

    return (
        <div className={props.loginModal ? "Modal" : "Hidden"} onClick={CloseModal}>

            <form className="LoginFormContainer">

                <h2>Login</h2>

                <input type="text" id="UsernameLoginInput" onChange={OnChange} value={username} placeholder="Type your username"/>
                <input type="password" id="PasswordLoginInput" onChange={OnChange} value={password} placeholder="Type your password" />

                <button onClick={loginFunction}>Login</button>
            </form>
        </div>
    )
}