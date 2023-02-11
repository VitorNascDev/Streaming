import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Video(props) {

    // The video component that open the video

    const [categorys, setCategorys] = useState([])
    const { video } = useParams()

    useEffect(() => {

        // This useEffect is to get the category list


        fetch('/getCategoryList', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Title: video })
        })
        .then(response => response.json())
        .then(data => setCategorys([...data]))


    }, [])

    // Returning a acess denied message in case the user doesn't have the token

    if (props.token.tokenExist) {
        return (
            <div className="VideoContainer">
                <video controls>
                    <source src={`/video/${props.token.token}/${video}.mp4`}></source>
                </video>
                <h1>{video}</h1>

                <div className="CategorysContainer">

                    
                    {/* // Here we gonna check if the video has any category */}

                    {categorys.length ? (
                        <ul>
                            {categorys.map(data => {
                                return (
                                    <li>{data}</li>
                                )
                            })}
                        </ul>
                    ) : 
                    (
                        <h1>Not Exist</h1>
                    )}

                    

                </div>
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