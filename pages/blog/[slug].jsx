import React, { useState } from 'react'
import { BackgroundImages, BlogNavigation, Header, Lightbox } from '@/components'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';

const PostPage = ({ post }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="keywords" content={post.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                {/* Header */}
                <Header />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <BlogNavigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9" id='blog'>
                        <div className="sections-wrapper">
                            {/* Blog Post */}
                            <div className="section-box">
                                <div className="row g-4">
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Posted by:</h6>
                                        <p>{post.postedBy}</p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Category:</h6>
                                        <p>{post.category}</p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Posted on:</h6>
                                        <p>{post.date}</p>
                                    </div>
                                </div>{/* end row */}
                                <div className="mt-4">
                                    <h1>{post.title}</h1>
                                    <p>{post.description}</p>
                                </div>
                                <div className="row g-4 mt-2">
                                    <div className="col-12">
                                        <Image className="w-100 border-radius" src={post.image} alt={post.title} placeholder="blur" />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                    {post.images.map((item, index) => (
                                        <div
                                            className="col-12 col-xl-6"
                                            key={index}
                                            onClick={() => openLightbox(item.image)}
                                        >
                                            <div className="lightbox-image-box border-radius">
                                                <Image src={item.image} alt={post.title} placeholder="blur" />
                                                <i className="bi bi-arrows-fullscreen"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div> {/* end row */}
                                {/* Tags */}
                                <ul className="list-inline-pills mt-5">
                                    {post.tags.map((item, index) => (
                                        <li key={index}><a href="#">#{item.name}</a></li>
                                    ))}
                                </ul>
                            </div> {/* end section-box */}
                            {/* end Blog Post */}
                        </div>
                        {lightboxImage && (
                            <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                        )}
                    </div>
                </div> {/* end main row */}
                {/*Background Vertical lines  */}
                <BackgroundImages />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your blog posts
    const paths = blogData.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog post with the matching slug
    const post = blogData.posts.find((post) => post.slug === slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
    };
}

export default PostPage