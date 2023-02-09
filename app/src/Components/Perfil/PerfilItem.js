import PerfilPhoto from '../../Assets/Default Person.png'
export default function PerfilItem(props) {
    return (
        <li>
            <a href={`/Perfil/${props.name}`} className='PerfilItem'>
            
                <img src={PerfilPhoto} />

                <h2>{props.name}</h2>
            
            </a>
        </li>
    )
}