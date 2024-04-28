import React from 'react'
import styles from "../../styles/Shop.module.css";

export default function Shop() {
    return (
        <div className={`${styles.shopContainer} flex items-center justify-center h-screen`}>
            <header className='text-4xl font-bold transition-all duration-300 transform hover:scale-105'>
                <h1 className={`${styles.shopHeader} animate-bounce`}>Coming Soon....</h1>
            </header>
        </div>
    )
}