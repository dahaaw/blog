import Link from "next/link";
import InfoPost from "./InfoPost";
export default function FeaturedPost(){
    return (
        <article>
            <div className="flex -mx-4 lg:items-center item-start flex-wrap">

                <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
                    <Link href="/detail">
                        <a><img src="./15071.jpg" className="rounded-xl w-full mb-4 md:mb-0"/></a>
                    </Link>
                </div>

                <div className="px-4 lg:w-4/12 md:w-5/12 w-full">
                    <InfoPost
                        category="UI Design"
                        date="04 Oktober 1994"
                        title="Mengenal Warna"
                        shortDescription="alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj"
                        authorName="Hamdan Awaludin"
                        authorJob="Web Programmer"
                        authorAvatar="./163949.jpg"
                    />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden"/>
        </article>
    )
}
