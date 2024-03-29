"use client";

import { useEffect, useState } from 'react';

import styles from './styles.module.css';

function ScrollToTop() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const logScrollPosition = () => {
            // console.log(window.scrollY);
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', logScrollPosition);

        return () => {
            window.removeEventListener('scroll', logScrollPosition);
        };
    }, []);

    const scrollToTopFuntion = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <button className={`${styles.scrollToTopButton} ${scrollPosition > 150 ? styles.zoomInButton : styles.zoomOutButton}`} onClick={scrollToTopFuntion}>
            <img src="./images/MajeggsticIcon.png" alt="" width={50} />
        </button>
    );
}

export default ScrollToTop;