import React from 'react';
import BookingOptions from '@/components/Booking';
import styles from '../styles/Booking.module.css';

export default function Booking () {
    return (
        <div className='text-center'>
            <header className='text-4xl font-bold'>
                <h1 className={`${styles.bookingHeader} mb-4 hover:animate-bounce`}>BOOK NOW</h1>
            </header>
            <BookingOptions />
        </div>
    )
}

