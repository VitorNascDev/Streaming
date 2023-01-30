import { useState } from "react"

export default function Register(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [Perfis, setPerfis] = useState([{position: 1, text: ""}])

    function OnChange(e) {
        const changFunc = {
            UsernameRegisterInput: () => { setUsername(e.target.value)},
            PasswordRegisterInput: () => { setPassword(e.target.value)},
            EmailRegisterInput: () => { setEmail(e.target.value)}
        }

        changFunc[e.target.id]()
    }

    function CloseModal(e) {
        if (e.target.classList[0] === "Modal") {
            props.setRegisterModal(false)
        }
    }

    function RegisterFunction(e) {
        e.preventDefault()

        fetch('/Auth/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                email,
                Perfis
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    function AddRemovePerfil(e) {           // The function to add or remove a perfil field
        e.preventDefault()
        console.log(e.target.id)

        if (e.target.id === "AddPerfil") {  // When the Button to add the perfil is clicked
            const newPerfil = {
                position: Perfis[Perfis.length - 1].position + 1,
                text: ''
            }

            if (newPerfil.position !== 6) {  // The condition to not over pass the maximum num of perfis
                setPerfis([...Perfis, newPerfil])
            } else {
                alert('Maximum 5 Perfis')
            }
        }

        if (e.target.id === "RemovePerfil") {
            if (Perfis.length - 1 !== 0) {
                setPerfis(Perfis.filter(data => data.position !== Perfis.length))
            } else {                        // The condition to not remove all the profiles
                alert('Can\'t Remove all perfis')
            }
        }
    }

    function OnChangePerfilInput(e) {
        const id = e.target.id
        const num = Number(id.slice(id.length - 1, id.length))

        setPerfis(Perfis.filter(data => {
            if (data.position === num) {
                data.text = e.target.value
            }

            return data
        }))
    }

    return (
        <div className={props.registerModal ? "Modal" : "Hidden"} onClick={CloseModal}>
            <form className="LoginFormContainer">
                <h2>Register</h2>
                <input type="username" id="UsernameRegisterInput" onChange={OnChange} placeholder="Type your username"/>
                <input type="password" id="PasswordRegisterInput" onChange={OnChange} placeholder="Type your password"/>
                <input type="email" id="EmailRegisterInput" onChange={OnChange} placeholder="Type your email" />

                <div className="RegisterPerfilContainer">
                    <h2>Perfil</h2>

                    <div className="PerfilInputContainer">

                        {Perfis.map(data => {       // Show all the inputs of the perfil
                            return (
                                <input
                                    type="text"
                                    key={data.position}
                                    value={data.text}
                                    placeholder={`Write the ${data.position} Perfil...`}
                                    id={`PerfilInput${data.position}`}
                                    onChange={OnChangePerfilInput}
                                />
                            )
                        })}

                    </div>

                    <div onClick={AddRemovePerfil} className="RegisterPerfilButtonContainer">
                        <button id="RemovePerfil">Remove one perfil</button>
                        <button id="AddPerfil">Add one perfil</button>
                    </div>
                </div>

                <button onClick={RegisterFunction}>Register</button>
            </form>
        </div>
    )
}