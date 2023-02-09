import { useEffect, useState } from "react";
import PerfilItem from "./PerfilItem";

export default function Perfil(props) {

    const [PerfilList, setPerfilList] = useState([])

    useEffect(() => {

        if (props.token.tokenExist) {

            fetch('/Auth/getProfiles',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'UserToken': props.token.token
                }
            })
            .then(response => response.json())
            .then(data => {
                setPerfilList([...data])
            })


        }



    }, [props.token])
    
    return (
        <div>
            <ul className="PerfilListContainer">
                {PerfilList.map(data => {
                    return (
                        <PerfilItem name={data} key={data} />
                    )
                })}
            </ul>
        </div>
    )
}