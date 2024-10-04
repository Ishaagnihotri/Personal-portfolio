// context/PortfolioContext.js

import { createContext, useState, useContext } from 'react';

// 1. Create the context
const PortfolioContext = createContext();

// 2. Create the provider component
export const PortfolioProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState([]);

    return (
        <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
            {children}
        </PortfolioContext.Provider>
    );
};

// 3. Create a custom hook to easily access the context
export const usePortfolio = () => useContext(PortfolioContext);
