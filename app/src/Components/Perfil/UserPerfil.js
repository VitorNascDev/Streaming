import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ListFiles from "../ListFiles"

export default function UserPerfil(props) {

    const [videos, setVideo] = useState([])
    const { perfil } = useParams()

    useEffect(() => {


        fetch('/getAllFiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'UserToken': props.token.token
            }
        })
        .then(response => response.json())
        .then(data => {
            setVideo([...data])
            console.log(data)
        })

    }, [])

    return (
        <div>
            <h1>{perfil}</h1>

            <ListFiles token={props.token} Videos={videos} />
        </div>
    )
}