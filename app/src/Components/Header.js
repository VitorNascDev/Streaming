import { useNavigate } from "react-router-dom"

export default function Header(props) {

    function SignIn() {
        props.setLoginModal(true)
    }

    function Register() {
        props.setRegisterModal(true)
    }

    function Logout() {
        props.setToken({
            tokenExist: false,
            token: ''
        })

        localStorage.removeItem('UserToken')
    }

    return (
        <header>
            <div className="HeaderContent">

                <h1 id="HeaderLogo">Streaming</h1>

                <div className="ButtonHeaderContainer">

                    {props.UserToken.tokenExist ? (
                        <>
                            <button id="ButtonLogout" onClick={Logout}>Log Out</button>
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