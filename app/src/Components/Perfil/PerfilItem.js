import PerfilPhoto from '../../Assets/Default Person.png'
export default function PerfilItem(props) {
    return (
        <li className="PerfilItem">
            <a href="">
            
                <img src={PerfilPhoto} />

                <h2>{props.name}</h2>
            
            </a>
        </li>
    )
}