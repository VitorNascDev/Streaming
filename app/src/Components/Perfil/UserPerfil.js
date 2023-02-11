import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ListFiles from "../ListFiles"

export default function UserPerfil(props) {

    const [searchText, setSearchText] = useState('')
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

    function handleChange(e) {
        setSearchText(e.target.value)
    }

    function onSearch() {
        console.log(searchText)
    }

    return (
        <div>
            <h1>{perfil}</h1>

            <div className="SearchContainer">
                <input type="text" placeholder="Search" onChange={handleChange} />
                <button onClick={onSearch} >Search</button>
            </div>

            <ListFiles token={props.token} Videos={videos} />
        </div>
    )
}