import React, {useState} from 'react'
import { residence } from './DataArray'

export const PropertiesOptions = () => {
  return (
    <div>PropertiesOptions</div>
  )
}

export const ResidencialProjects = () => {
    const [currentContent, setCurrentContent] = useState(residence[0].sub_cities);

    const handleClick = (newContent) => {
        setCurrentContent(newContent);
    };
    

    return (
        <div>
            <div className='residencial-projects-container'>
                {residence.map((res, rIndex) => (                
                    <div className="location-section">
                        <div className="main-location-section" key={rIndex}>
                            <button  className='main_location' onClick={() => handleClick(res.sub_cities)}>{res.city}</button>
                            <div className="list-decor"></div>
                        </div>                        
                    </div>                
                ))}
            </div>
            <hr  style={{margin: '10px 0', marginLeft: '10px'}} />
            <div style={{marginTop: '30px', marginLeft: '10px', width: 'auto', height: '100px', overflowY: 'auto', wordBreak: 'break-word', textAlign: 'left' }}>
                {currentContent.map((content, cIndex) => (
                    <div key={cIndex} className='residencial-display'>
                        {content}
                    </div>
                ))}
                
            </div>
        </div>
        
    )
}
