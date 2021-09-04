import InfoPost from "./InfoPost"
export default function FeaturedPost(){
    return (
        <article>
            <div className="flex -mx-4 items-center">

                <div className="px-4 w-8/12">
                    <img src="https://cdn.masterdiskon.com/masterdiskon/blog/post/pulaaau.jpg" className="rounded-xl w-full"/>
                </div>

                <div className="px-4 w-4/12">
                    <InfoPost />
                </div>
            </div>
        </article>
    )
}
