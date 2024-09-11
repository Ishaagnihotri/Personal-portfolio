import React from 'react'
import { blogData } from './BlogData'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
    return (
        <div className="section-box mt-4" id="blog">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={blogData.mainData.title}>{blogData.mainData.title}</h6>
                    <h1>{blogData.mainData.title2}</h1>
                    <p>{blogData.mainData.description}</p>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                {blogData.posts.map((item, index) => (
                    <div key={index} className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href={`blog/${item.slug}`}>
                                <Image src={item.image} alt={item.title} placeholder="blur" />
                            </Link>
                            <div className="blog-post-category">
                                <Link href="#">{item.category}</Link>
                            </div>
                        </div>
                        <div className="blog-post-caption">
                            <p className="mb-2">Posted on {item.date}</p>
                            <h2><Link className="link-decoration" href={`blog/${item.slug}`}>{item.title}</Link></h2>
                            <Link className="button button-sm button-outline-dark mt-2" href={`blog/${item.slug}`}>Continue Reading</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog