import React from 'react';
import BookingOptions from '@/components/Booking';
import styles from '../styles/Booking.module.css';

export default function Booking () {
    return (
        <div className='text-center'>
            <header className='text-4xl font-bold transition-all duration-300 transform hover:scale-105'>
                <h1 className={`${styles.bookingHeader} mb-4`}>BOOK NOW</h1>
            </header>
            <BookingOptions />
        </div>
    )
}

