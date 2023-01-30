import { useEffect, useState } from 'react'
import VideoItem from './VideoItem'

export default function ListFiles() {

    const [videos, setVideo] = useState([])

    useEffect(() => {
        fetch('/getAllFiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setVideo(data))

    }, [])

    return (
        <ul className='VideoItemContainer'>
            {videos.map(video => {
                return (
                    <VideoItem data={video}/>
                )
            })}
        </ul>
    )
}