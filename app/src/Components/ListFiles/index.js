import { useEffect, useState } from 'react'
import VideoItem from './VideoItem'

export default function ListFiles(props) {

    // If the token exist it will rendered all the video links and thumbnails
    // else it will return a acess denied message

    

    if (props.token.tokenExist && props.Videos.length !== 0) {

        return (
            <ul className='VideoItemContainer'>
                {props.Videos.map(video => {
                    return (
                        <VideoItem token={props.token} data={video.Title} key={`${video.Title}${Math.floor(Math.random() * 100)}`}/>
                    )
                })}
            </ul>
        )
    } else {

        return (
            <div className="AcessDeniedMessage">
                <h1>Acess Denied Or the Folder is empty</h1>
            </div>
        )
    }

}