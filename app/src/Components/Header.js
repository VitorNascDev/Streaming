import { useState } from 'react'

export default function Header() {

    const [logged, setLogged] = useState(false)

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
                            <button>Sign In</button>
                            <button>Register</button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}