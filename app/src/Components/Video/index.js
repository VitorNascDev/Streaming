import { useParams } from "react-router-dom"

export default function Video(props) {

    // The video component that open the video

    const { video } = useParams()

    // Returning a acess denied message in case the user doesn't have the token

    if (props.token.tokenExist) {
        return (
            <div className="VideoContainer">
                <video controls>
                    <source src={`/video/${props.token.token}/${video}.mp4`}></source>
                </video>
                <h1>{video}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Acess Denied</h1>
            </div>
        )
    }
}