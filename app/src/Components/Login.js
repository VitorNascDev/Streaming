import { useEffect, useState } from 'react'

export default function Login (props) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function OnChange(e) {

        useEffect(()=> {
            console.log(props.loginModal)
        }, [])

        const changeFunc = {
            username: () => { setUsername(e.target.value)},
            password: () => { setPassword(e.target.value)}
        }

        console.log(e)

    }

    function loginFunction(e) {
        e.preventDefault()

        console.log(`username: ${username}, password: ${password}`)
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

                <input type="text" id="username" onChange={OnChange} placeholder="Type your username"/>
                <input type="password" id="password" onChange={OnChange} placeholder="Type your password" />

                <button onClick={loginFunction}>Login</button>
            </form>
        </div>
    )
}