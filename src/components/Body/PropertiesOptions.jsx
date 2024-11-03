import React, {useState, useRef} from 'react';
import { blogs, residence, areaCalc, propOptionsCities } from './DataArray';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

export const PropertiesOptions = () => {
  return (
    <div>PropertiesOptions</div>
  )
}

export const ResidencialProjects = () => {
    const [currentContent, setCurrentContent] = useState(residence[0].sub_cities);
    const [activeId, setActiveId] = useState(residence[0].id);

    const handleClick = (id, newContent) => {
        setCurrentContent(newContent);
        setActiveId(id);
      };
    
    

    return (
        <div style={{marginRight: '10px'}}>
            <div className='residencial-projects-container' >
                {residence.map((res, rIndex) => (                
                    <div className="location-section">
                        <div className="main-location-section" key={rIndex}>
                            <div
                                className={`main_location ${activeId === res.id ? 'active' : ''}`}
                                onClick={() => handleClick(res.id, res.sub_cities)}>
                                    {res.city}
                            </div>
                        </div>                        
                    </div>                
                ))}
            </div>
            <hr style={{marginLeft: '10px', height: '1px', outline: 'none', background: 'rgba(0,0,0,0.2)', border: 'none'}} />
            <div className='residencial-scroll' >
                {currentContent.map((content, cIndex) => (
                    <div key={cIndex} className='residencial-display'>
                        {content}
                    </div>
                ))}
                
            </div>
        </div>
        
    )
}

export const MmProperties = () => {
    const [currentContent, setCurrentContent] = useState(propOptionsCities[0].subType);
    const [activeId, setActiveId] = useState(propOptionsCities[0].id);

    const handleClick = (id, newContent) => {
        setCurrentContent(newContent);
        setActiveId(id);
      };

    const TruncatedText = (text, maxLength) => {
        const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
        return (
            <div>
                <p>{truncatedText}</p>
            </div>
        );
    }
    

    return (
        <div style={{marginRight: '10px'}}>
            <div className='residencial-projects-container' >
                {propOptionsCities.map((res, rIndex) => (                
                    <div className="location-section">
                        <div className="main-location-section" key={rIndex}>
                            <div
                                className={`main_location ${activeId === res.id ? 'active' : ''}`}
                                onClick={() => handleClick(res.id, res.subType)}>
                                    {res.type}
                            </div>
                        </div>                        
                    </div>                
                ))}
            </div>
            <hr style={{marginLeft: '10px', height: '1px', outline: 'none', background: 'rgba(0,0,0,0.2)', border: 'none'}} />
            <div className='property-scroll' style={{width:'99%', display:'flex', gap:'20px', }}>
                {currentContent.map((content, cIndex) => (
                    <div key={cIndex} className=''  >
                        <div style={{width:'260px', color:'rgba(0,0,0,0.7)', fontSize:'14.5px'}}>
                            <li style={{marginBottom:'2px', letterSpacing:'0.5px'}}>
                                <b>{content.category}</b>
                            </li>
                            {content.subCategory.map((sub, sIndex) => (
                                <li key={sIndex} className='property-subtype'>
                                    {TruncatedText(sub, 28)}
                                </li>
                            ))}  
                        </div>                                              
                    </div>
                ))}
                
            </div>
        </div>
        
    )
}


export const RecommendedProjects = () => {
    const [currentContent, setCurrentContent] = useState(blogs[0].sub_title);
    const [activeId, setActiveId] = useState(blogs[0].id);

    const handleClick = (id, newContent) => {
        setCurrentContent(newContent);
        setActiveId(id);
    };

    const scrollContainerRef = useRef(null);
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = 120; 
    
        if (direction === 'left') {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };
    

    const TruncatedText = (text, maxLength) => {
        const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
        return (
            <div>
                <p>{truncatedText}</p>
            </div>
        );
    }
    const TruncatedAreaText = (text, maxLength) => {
        const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
        return (
            <div>
                <p>{truncatedText}</p>
            </div>
        );
    }
    return (
        <div>
            <div className="blogs-container">
                <div className="blogs-left">Top Blogs</div>
                <div className="blogs-right" style={{marginRight: '30px'}}>
                    <div className="blogs-container-title">
                        <button className='scroll-button' onClick={() => scroll('left')}>
                            <FaArrowLeftLong />
                        </button>                        
                        <div className="blog-title-section" ref={scrollContainerRef}>
                            {blogs.map((blog, bIndex) => (                                
                                <li key={bIndex}
                                    className={`blogs-container-title-item ${activeId === blog.id ? 'active' : ''}`}
                                    onClick={() => handleClick(blog.id, blog.sub_title)}>{blog.title} 
                                </li>
                            ))}
                        </div>
                        
                        <button className='scroll-button' onClick={() => scroll('right')}>
                            <FaArrowRightLong />
                        </button>
                    </div>
                    <hr style={{height: '1px', outline: 'none', background: 'rgba(0,0,0,0.2)', border: 'none', width: '100%'}} />
                    <div style={{marginTop: '20px'}}>
                        {currentContent.map((content, cIndex) => (
                            <div key={cIndex} className='residencial-display'>
                                {TruncatedText(content, 30)}
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>

                {/* ------------------------------------ Area Calculator ------------------------------------ */}

            <div className="blogs-container area-cal-container">
                <div className="area-left">Top Blogs</div>
                <div className="blogs-right" style={{marginRight: '30px'}}>
                    <div className="blogs-container-title">
                        <button className='scroll-button' onClick={() => scroll('left')}>
                            <FaArrowLeftLong />
                        </button>                        
                        <div className="blog-title-section" ref={scrollContainerRef}>
                            {areaCalc.map((area, aIndex) => (                                
                                <li key={aIndex} className='blogs-container-title-item area-cal-title'>
                                    {TruncatedAreaText(area, 22)}
                                </li>
                            ))}
                        </div>
                        
                        <button className='scroll-button' onClick={() => scroll('right')}>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}