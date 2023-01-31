import { useEffect, useState } from 'react'
import VideoItem from './VideoItem'

export default function ListFiles(props) {

    const [videos, setVideo] = useState([])

    useEffect(() => {
        fetch('/getAllFiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'UserToken': props.token.token
            }
        })
        .then(response => response.json())
        .then(data => setVideo(data))

    }, [])

    if (props.token.tokenExist) {

        return (
            <ul className='VideoItemContainer'>
                {videos.map(video => {
                    return (
                        <VideoItem token={props.token} data={video} key={`${video}${Math.floor(Math.random() * 100)}`}/>
                    )
                })}
            </ul>
        )
    } else {

        return (
            <div>
                <h1>Acess Denied</h1>
            </div>
        )
    }

}