import { useState } from 'react';
import Layout from '@components/Layout';
import FeaturedPost from '@components/FeaturedPost';
import Container from '@components/Container';
import CardPost from '@components/CardPost';
import mockPost from '@data/post.json';

export default function Home() {
  const [post, setPost] = useState(mockPost);
  console.log(mockPost)
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
