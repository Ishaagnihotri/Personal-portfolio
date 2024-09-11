import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/col-1.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    navigationList: [
        {
            title: "First",
            classes: "first",
            dataFilter: ".first"
        },
        {
            title: "Second",
            classes: "second",
            dataFilter: ".second"
        },
    ],
    projects: [
        {
            projectTitle: 'Project Title 1',
            slug: 'first',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'first',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Project Title 2',
            slug: 'second',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'second',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Project Title 1',
            slug: 'first-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'first',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Project Title 2',
            slug: 'second-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'second',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
    ]
};