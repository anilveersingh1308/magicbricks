import './Body.css'
import preview1 from '../../assets/preview-1.png'
import preview2 from '../../assets/preview-2.png'
import preview3 from '../../assets/preview-3.png'
import preview4 from '../../assets/preview-4.jpg'


import React, { useState } from 'react';

export const ImgPreview = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div style={styles.carouselContainer}>
        <button onClick={prevImage} style={styles.button}>Previous</button>
        <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            style={styles.image}
        />
        <button onClick={nextImage} style={styles.button}>Next</button>
        </div>
    );
};

const styles = {
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '400px',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '2px solid #ddd',
  },
};

