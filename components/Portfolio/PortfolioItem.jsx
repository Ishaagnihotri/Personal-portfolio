import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioItem = ({id, imageSrc, category, projectTitle, slug }) => {
    return (
        <div className={`col-12 col-xl-6 portfolio-item ${category}`}>
            <div className="portfolio-box">
                <Image src={imageSrc} alt={projectTitle} width = {200} height={200} placeholder="blur"  blurDataURL="data:image/jpeg;base64,..." />
                <span className="portfolio-category">{category}</span>
                <div className="portfolio-caption">
                    <h1>
                    <Link href={{
                            pathname: `/portfolio/${slug}`,
                            query: { title: projectTitle, id : id}
                        }}>{projectTitle}</Link>
                        {/* <Link href={`portfolio/${slug}`}>{projectTitle}</Link> */}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
