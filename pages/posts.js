import Layout from "@components/Layout";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import SectionHeaders from "@components/SectionHeaders";
import { useState } from "react";
import mockPosts from "@data/post.json";

export default function Posts(){
    const [posts, setPosts] = useState(mockPosts);

    return(
        <Layout>
            <Container>
                <SectionHeaders>UI Design</SectionHeaders>
                <div className="flex -mx-4 flex-wrap mt-6">
                    {posts.map(p => {
                        <div key={p._id} className="md:w-4/12 w-full px-4 py-6">
                            <CardPost {...mockPosts} />
                        </div>
                    })}
                </div>
            </Container>
        </Layout>
    )
}