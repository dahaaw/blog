import { useState } from 'react';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import FeaturedPost from '@components/FeaturedPost';
import Container from '@components/Container';
import CardPost from '@components/CardPost';
import Footer from '@components/Footer';


export default function Home() {
  const [post, setPost] = useState([
    {
      _id: 1,
      thumbnail: "./163949.jpg",
      category: "UI Design",
      date: "04 Oktober 1994",
      title: "Mengenal Warna",
      shortDescription: "alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj",
      authorName: "Hamdan Awaludin",
      authorJob: "Web Programmer",
      authorAvatar: "./163949.jpg"
    },
    {
      _id: 2,
      thumbnail: "./163949.jpg",
      category: "UI Design",
      date: "04 Oktober 1994",
      title: "Mengenal Warna",
      shortDescription: "alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj",
      authorName: "Hamdan Awaludin",
      authorJob: "Web Programmer",
      authorAvatar: "./163949.jpg"
    },
    {
      _id: 3,
      thumbnail: "./163949.jpg",
      category: "UI Design",
      date: "04 Oktober 1994",
      title: "Mengenal Warna",
      shortDescription: "alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj",
      authorName: "Hamdan Awaludin",
      authorJob: "Web Programmer",
      authorAvatar: "./163949.jpg"
    },
    {
      _id: 4,
      thumbnail: "./163949.jpg",
      category: "UI Design",
      date: "04 Oktober 1994",
      title: "Mengenal Warna",
      shortDescription: "alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj",
      authorName: "Hamdan Awaludin",
      authorJob: "Web Programmer",
      authorAvatar: "./163949.jpg"
    },
    {
      _id: 5,
      thumbnail: "./163949.jpg",
      category: "UI Design",
      date: "04 Oktober 1994",
      title: "Mengenal Warna",
      shortDescription: "alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj",
      authorName: "Hamdan Awaludin",
      authorJob: "Web Programmer",
      authorAvatar: "./163949.jpg"
    },
    {
      _id: 6,
      thumbnail: "./163949.jpg",
      category: "UI Design",
      date: "04 Oktober 1994",
      title: "Mengenal Warna",
      shortDescription: "alnfadlf afnasflasnfas aslfnasflasnfasf afaskfnsaflas fsalf asflsa flsa aslf alf afjl fjljsa fjasf a a fa faf aj a flasnflsanflafa kjasf asfjaf afalaf asfaflas fafa bflas fasf aljf safa falj",
      authorName: "Hamdan Awaludin",
      authorJob: "Web Programmer",
      authorAvatar: "./163949.jpg"
    }
  ])
  return (
      <Layout>
        <Container>
          <FeaturedPost />
          <div className="flex -mx-4 flex-wrap mt-4">
            {post.map(v =>(
              <div key={v._id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...v}/>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    )
}
