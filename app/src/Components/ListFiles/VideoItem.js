export default function VideoItem(props) {
    
    // this is component is container to show the thumbnail of a video and the title

    return (
        <li>
            <a href={`/test/${props.data}/`} className="VideoItem">
                <div className="VideoItemImage">
                    <img src={`/video/${props.token.token}/${props.data}.jpg`}/>
                </div>
                <h4>{`${props.data.slice(0, 22)}...`}</h4>
            </a>
        </li>
    )
}