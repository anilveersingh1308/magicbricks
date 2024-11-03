import {React, useEffect, useState} from 'react'
import './Body.css'
import preview1 from '../../assets/preview-1.png'
import preview2 from '../../assets/preview-2.png'
import preview3 from '../../assets/preview-3.png'
import preview4 from '../../assets/preview-4.jpg'

export const SlideShow = () => {
    
    const images = [ preview1, preview2, preview3, preview4];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);  
    
        return () => clearInterval(interval); 
      }, [images.length]);

    return (
        <div>
            <img src={images[currentIndex]} alt="Slideshow" className="image-viewer" style={{borderRadius:'10px', marginTop:'30px', cursor:'pointer'}}/>
        </div>
    )
}
