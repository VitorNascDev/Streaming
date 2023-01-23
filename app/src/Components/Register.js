import { useState } from "react"

export default function Register(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [Perfis, setPerfis] = useState([])

    function onChange(e) {
        const changFunc = {
            username: () => { setUsername(e.target.value)},
            password: () => { setPassword(e.target.value)},
            email: () => { setEmail(e.target.value)}
        }

        console.log(e)
    }

    function CloseModal(e) {
        if (e.target.classList[0] === "Modal") {
            props.setRegisterModal(false)
        }
    }

    return (
        <div className={props.registerModal ? "Modal" : "Hidden"} onClick={CloseModal}>
            <form className="LoginFormContainer">
                <h2>Register</h2>
                <input type="username" id="username" onChange={onChange} placeholder="Type your username"/>
                <input type="password" id="password" onChange={onChange} placeholder="Type your password"/>
                <input type="email" id="email" onChange={onChange} placeholder="Type your email" />

                <button>Register</button>
            </form>
        </div>
    )
}