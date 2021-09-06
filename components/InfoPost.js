import PostMeta from "@components/PostMeta";
import PostAuthor from "@components/PostAuthor";

export default function InfoPost({
    category, date, title, shortDescription, authorAvatar, authorName, authorJob
}) {
    return (
        <>
            <PostMeta category={category} title={title} date={date}/>
            <p className="text-white/60 mt-5 w-10/12">
                {shortDescription}
            </p>
            <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} /> 
        </>
    )
}
