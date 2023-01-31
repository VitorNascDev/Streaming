export default function VideoItem(props) {
    

    return (
        <li className="VideoItem">
            <a href={`/test/${props.data}/`}>
                <img src={`/video/${props.token.token}/${props.data}.jpg`}/>

                <h4>{props.data}</h4>
            </a>
        </li>
    )
}