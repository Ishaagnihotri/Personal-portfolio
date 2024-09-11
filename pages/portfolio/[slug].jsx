
import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { BackgroundImages, Header, Lightbox, PortfolioNavigation } from '@/components';
import { portfolioData } from '@/components/Portfolio/PortfolioData';

const PortfolioPage = ({ project }) => {
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
                <title>{project.projectTitle}</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={project.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                {/* Header */}
                <Header />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <PortfolioNavigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9" id='portfolio'>
                        <div className="sections-wrapper">
                            {/* Project content */}
                            <div className="section-box">
                                <div className="row g-4">
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Client:</h6>
                                        <p>{project.client}</p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Services:</h6>
                                        <p>{project.services}</p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Duration:</h6>
                                        <p>{project.duration}</p>
                                    </div>
                                </div>{/* end row */}
                                <div className="mt-4">
                                    <h1>{project.projectTitle}</h1>
                                    <p>{project.description}</p>
                                    <ul className="list-inline-pills mt-3">
                                        {project.categories.map((item, index) => (
                                            <li key={index}>{item.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="row g-4 mt-2">
                                    <div className="col-12">
                                        <Image className="border-radius" src={project.mainImage} alt={project.projectTitle} placeholder="blur" />
                                    </div>
                                    {project.images.map((item, index) => (
                                        <div
                                            className="col-12 col-xl-6"
                                            key={index}
                                            onClick={() => openLightbox(item.image)}
                                        >
                                            <div className="lightbox-image-box border-radius" >
                                                <Image src={item.image} alt={project.projectTitle} placeholder="blur" />
                                                <i className="bi bi-arrows-fullscreen"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>{/* end section-box */}
                            </div>{/* end section-box */}
                            {/* end Project Content */}
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
    // Generate paths for all your blog projects
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog project with the matching slug
    const project = portfolioData.projects.find((project) => project.slug === slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}
export default PortfolioPage