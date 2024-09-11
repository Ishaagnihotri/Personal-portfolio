import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState('about');

    // Define an array of navigation items with their corresponding IDs
    const navItems = [
        { label: 'About Me', id: 'about' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Services', id: 'services' },
        // { label: 'Testimonial', id: 'testimonial' },
        { label: 'Resume', id: 'resume' },
        // { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ];

    // Define a function to handle the scroll event
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Determine which link is active based on the scroll position
        for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (element && scrollY >= element.offsetTop) {
                setActiveLink(item.id);
            }
        }

        // Calculate headerHeight and update isFixed
        const headerHeight = document.getElementById('header').clientHeight;
        const windowWidth = window.innerWidth;

        if (windowWidth < 992) {
            if (scrollY >= headerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Get the initial headerHeight
        const initialHeaderHeight = document.getElementById('header').clientHeight;

        // Check and update isFixed initially
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            if (window.scrollY >= initialHeaderHeight) {
                setIsFixed(true);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-wrapper">
            <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                            >
                                <span className="nav-link-desktop">{item.label}</span>
                                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                                <span className="nav-circle"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navigation