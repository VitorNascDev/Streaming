import { useState } from 'react'

export default function Header(props) {

    const [logged, setLogged] = useState(false)

    function SignIn() {
        props.setLoginModal(true)
    }

    function Register() {
        props.setRegisterModal(true)
    }

    return (
        <header>
            <div className="HeaderContent">

                <h1 id="HeaderLogo">Streaming</h1>

                <div className="ButtonHeaderContainer">

                    {logged ? (
                        <>
                            <button>Log Out</button>
                        </>
                    ) : (
                        <>
                            <button onClick={SignIn}>Sign In</button>
                            <button onClick={Register}>Register</button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}