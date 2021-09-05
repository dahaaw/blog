import InfoPost from "./InfoPost"

export default function CardPost({thumbnail, ...post}){
    return(
        <article>
            <img src={thumbnail} className="w-full rounded mb-4"/>
            <InfoPost {...post}/>
        </article>
    )
}