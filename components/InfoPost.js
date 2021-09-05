export default function InfoPost({
    category, date, title, shortDescription, authorAvatar, authorName, authorJob
}) {
    return (
        <>
            <div className="flex items-center text-white/60 space-x-4">
                <div className="uppercase">{category}</div>
                <span>&bull;</span>
                <div className="">{date}</div>
            </div>
            <h2 className="text-2xl mt-4">{title}</h2>
            <p className="text-white/60 mt-5 w-10/12">
                {shortDescription}
            </p>
            <div className="flex items-center mt-6">
                <img className="rounded-full w-12 h-12 object-cover" src={authorAvatar}/>
                <div className="ml-4">
                    <h3>{authorName}</h3>
                    <div className="text-white/60 text-sm">{authorJob}</div>
                </div>
            </div>
        </>
    )
}
