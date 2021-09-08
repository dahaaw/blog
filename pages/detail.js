import Container from '@components/Container';
import Layout from '@components/Layout';
import PostAuthor from '@components/PostAuthor';
import PostMeta from '@components/PostMeta';


export default function detail() {
    return (
        <Layout>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMeta category="UI DESIGN" date="10 Oktober 2021" title="huru hara hiri" center/>
                    <PostAuthor authorName="hamdan awaludin" authorAvatar="./15071.jpg" authorJob="Web Programmer"/>
                </div>
                <div className="md:w-10/12 w-full mx-auto">
                    <img src="./15071.jpg" className="w-full rounded-lg my-10"/>
                </div>
                <div className="md:w-8/12 w-full mx-auto leading-relaxed">
                    <p className="text-xl mb-4">
                        slakdnfbkfsanfas saflknafjkasfafnasfa fsfnaf jkfsa faskf bsajka fajkf safjksa fbakjf afjkas fjksa bfjksaf sajkfsa fjk sakb
                    </p>
                    <p className="mb-4">
                      sanfakjfnf sa asnaskjfbfas fsaf ajkfsa kf afalk fsaf akjfbafas fjkf sakjflsa fbsakjf safjksal fjsf sfsajkf sfkjsa falkfja kjsalfnasjkf asjkla fsakjlf sakf sfksajfsa fsakjlf fkjsal sakjlf kfljsa fsajklf sakfjlsansfakjlaf sjkla jksda kja lfjkasnfjks k  
                    </p>
                    <p className="mb-4">
                      sanfakjfnf sa asnaskjfbfas fsaf ajkfsa kf afalk fsaf akjfbafas fjkf sakjflsa fbsakjf safjksal fjsf sfsajkf sfkjsa falkfja kjsalfnasjkf asjkla fsakjlf sakf sfksajfsa fsakjlf fkjsal sakjlf kfljsa fsajklf sakfjlsansfakjlaf sjkla jksda kja lfjkasnfjks k  
                    </p>
                </div>
            </Container>
        </Layout>
    )
}
