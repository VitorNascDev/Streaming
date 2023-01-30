export default function VideoItem(props) {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxvcmVtIElwc3VtIiwiaWF0IjoxNjc1MTExODQxfQ.3LIalTTvljjjxVqV78_Rcet4SAAnbvCid1AJiUQL-fI"

    return (
        <li className="VideoItem">
            <a href="#">
                <img src={`/video/${token}/${props.data}.jpg`}/>

                <h4>{props.data}</h4>
            </a>
        </li>
    )
}