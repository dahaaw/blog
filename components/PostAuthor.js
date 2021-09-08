export default function PostAuthor({authorAvatar, authorName, authorJob}) {
    return (
        <div className="flex items-center mt-5">
            <img className="rounded-full w-14 h-14 object-cover" src={authorAvatar}/>
            <div className="ml-4">
                <h3>{authorName}</h3>
                <div className="text-white/60 text-sm">{authorJob}</div>
            </div>
        </div>
    )
}