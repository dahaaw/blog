import Head from "next/head";
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
            <Head>
                <title>Category &mdash; DB</title>
            </Head>
            <Container>
                <SectionHeaders>UI Design</SectionHeaders>
                {!posts.length ? (
                    <div className="text-center py-20">
                        <h2 className="text-6xl">No result</h2>
                        <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn't find any posts with keyword 'wakiwakiwakwaw'. Please try another keyword</p>
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-wrap mt-6">
                        {posts.map(p => (
                            <div key={p._id} className="md:w-4/12 w-full px-4 py-6">
                                <CardPost {...p} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </Layout>
    )
}