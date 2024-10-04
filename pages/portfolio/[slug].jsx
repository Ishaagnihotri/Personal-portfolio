import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortFolioContext';
import { useRouter } from 'next/router';
import { BackgroundImages, Header, Lightbox, PortfolioNavigation } from '@/components';

const PortfolioPage = () => {
    const router = useRouter();
    const { id } = router.query;  // Get the query parameter 'id'
    
    const { portfolioData } = usePortfolio();  // Get the portfolio data from the context

    const [lightboxImage, setLightboxImage] = useState(null);
    const [project, setProject] = useState(null); // Initialize as null

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    useEffect(() => {
        // Check local storage for project data
        const storedProject = localStorage.getItem(`project_${id}`);
        if (storedProject) {
            setProject(JSON.parse(storedProject)); // Set project from local storage
        } else if (portfolioData && id) {
            const foundProject = portfolioData?.projects.find(item => item._id === id); // Adjust this based on your data structure
            if (foundProject) {
                setProject(foundProject);
                localStorage.setItem(`project_${id}`, JSON.stringify(foundProject)); // Store in local storage
            }
        }
    }, [portfolioData, id]);


    if (!project) {
        return <div>Loading...</div>; // Render a loading state while the project is being fetched
    }

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
                                </div>
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
                                        {/* <Image className="border-radius" src={project.mainImage} alt={project.projectTitle} placeholder="blur" /> */}
                                    </div>
                                    
                                    <div style={{ height: '800px' }}>
    <iframe
        src={project.website_url}
        style={{ width: '100%', height: '100%', border: 'none' }} // Optional: makes the iframe responsive
        title="Project Website"
        allowFullScreen // Allows full-screen functionality if applicable
    />
</div>

                                 
                                </div>
                            </div>
                        </div>
                        {lightboxImage && (
                            <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                        )}
                    </div>
                </div> 
                <BackgroundImages />
            </div>
        </>
    )
}

export default PortfolioPage;
