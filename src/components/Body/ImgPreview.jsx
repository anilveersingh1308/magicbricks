import './Body.css'
import preview1 from '../../assets/preview-1.png'
import preview2 from '../../assets/preview-2.png'
import preview3 from '../../assets/preview-3.png'
import preview4 from '../../assets/preview-4.jpg'


export const ImgPreview = () => {      
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images] = useState([
      // Replace with your actual image URLs
      preview1, preview2, preview3, preview4,
      // Add more image URLs as needed
    ]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Adjust the interval time as needed (in milliseconds)
  
      return () => clearInterval(intervalId);
    }, [images]);
  
    return (
      <div className="image-carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
    );
  
      

    {/*}
    // Handle animation scenario (logic depends on your specific requirements)
    
    if (previewCount < 0 || previewCount > img_preview.length || !aniStatus){
        return <div>Invalid Preview Count or Animation Status</div>
    }
    const selectedPreview = img_preview[previewCount];


    return (
        <div className='preview-body-container'>
            {selectedPreview.map((imageObject) => (
                <img key={imageObject.id || Math.random()} // Add a unique key for each image
                    src={imageObject.thumbnail}
                    alt={imageObject.alt || 'Image'}  // Provide meaningful alt text
                    className='preview-image' // Optional: Add a CSS class for styling
                />
            ))}
        </div>
    );
    
    */}




    {/*}
    if (aniStatus){
        return (
            <div className='preview-body-container'>
                {img_preview.map((preview) => (
                <div>
                   {preview.img1.map((view) => (
                    <img src={view.thumbnail}></img>
                   ))}                    
                </div>
            ))}
            </div>            
        )
    }else if(previewCount===0){
        return (
            <div className='preview-body-container'>
                {img_preview.map((preview) => (
                <div>
                   {preview.img2.map((view) => (
                    <img src={view.thumbnail}></img>
                   ))}                    
                </div>
            ))}
            </div>            
        )
    }else if(previewCount===1){
        return (
            <div className='preview-body-container'>
                {img_preview.map((preview) => (
                <div>
                   {preview.img3.map((view) => (
                    <img src={view.thumbnail}></img>
                   ))}                    
                </div>
            ))}
            </div>            
        )
    }else if(previewCount===2){
        return (
            <div className='preview-body-container'>
                {img_preview.map((preview) => (
                    <div>
                    {preview.img4.map((view) => (
                        <img src={view.thumbnail}></img>
                    ))}                    
                    </div>
                ))}
            </div>            
        )
    }
        */}
};
