import Link from "next/link";
import InfoPost from "./InfoPost"

export default function CardPost({thumbnail, ...post}){
    return(
        <article>
                <Link href="/detail">
                    <a><img src={thumbnail} className="w-full rounded mb-4"/></a>
                </Link>
                <InfoPost {...post}/>
        </article>
    )
}