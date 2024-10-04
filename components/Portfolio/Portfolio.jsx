import React, { useEffect, useState } from 'react';
import { LoadingScreen, PortfolioItem } from '../';
import { portfolioData } from './PortfolioData';
import { usePortfolio } from '@/context/PortFolioContext';


const Portfolio = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const { setPortfolioData } = usePortfolio();
    console.log({data})
    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
          try {
            const response = await fetch('/api/posts'); // Assuming your API is at /api/handler
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            const result = await response.json();
            setData(result);
            setPortfolioData(result)
            console.log({result})
            setLoading(false)
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchData();
      }, []);

    const [selectedFilter, setSelectedFilter] = useState('');

    console.log(loading)
    const filteredProjects = selectedFilter === ''
            ? data?.projects
            : data?.projects?.filter((item) => item.category === selectedFilter);

    return (
        <div className="section-box mt-4" id="portfolio">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={portfolioData.mainData.title}>{portfolioData.mainData.title}</h6>
                    <h1>{portfolioData.mainData.title2}</h1>
                    <p>{portfolioData.mainData.description}</p>
                </div>
            </div>
            {loading===false ? <><div className="filter mt-4 mt-lg-5 mb-3">
                <ul>
                    <li
                        onClick={() => setSelectedFilter('')}
                        className={selectedFilter === '' ? 'mixitup-control-active' : ''}
                    >
                        Show All
                    </li>
                    {portfolioData.navigationList.map((listItem, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedFilter(listItem.dataFilter.slice(1))}
                            className={selectedFilter === listItem.dataFilter.slice(1) ? 'mixitup-control-active' : ''}
                        >
                            {listItem.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row g-4 portfolio-grid">
                {filteredProjects.map((item, index) => (
                    <PortfolioItem
                        id = {item._id}
                        key={index}
                        imageSrc={item.imageSrc}
                        category={item.category}
                        projectTitle={item.projectTitle}
                        slug={item.slug}
                    />
                ))}
            </div></>: <></> }
        </div>
    )
}

export default Portfolio