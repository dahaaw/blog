import Link from 'next/link';
export default function PostMeta({category, date, title, center}) {
    return (
        <div>
            <div className="flex items-center text-white/60 space-x-4">
                <div className="uppercase">{category}</div>
                <span>&bull;</span>
                <div className="">{date}</div>
            </div>
            <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
                <Link href="/detail">{title}</Link>
            </h2>
        </div>
    )
}