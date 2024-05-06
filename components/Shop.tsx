import styles from '../../styles/HomeSlideShow.module.css';  // Correct path

export default function Shop() {
    return (
        <div className="grid grid-cols-1 place-items-center min-h-screen space-y-4 m-20">
            <h2 className={`${styles.gradientHeader} text-3xl animate-bounce`}>COMING SOON...</h2>
        </div>
    );
}

