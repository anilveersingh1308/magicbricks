import React from 'react'
import './Body.css'
import { general_properties, img_preview, search_Menu } from './DataArray'
import { FaChevronDown, } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { RiMoneyRupeeCircleFill } from 'react-icons/ri'
import { PiMapPinFill } from 'react-icons/pi'
import { IoSearch } from 'react-icons/io5'


export const SearchBar = () => {
    const desc1 = [{head: 'Find a home you\'ll', head2: 'Love'}];
    const desc2 = [{prop_header: 'We\'ve got properties for everyone', pop_header: 'Popular Owner Properties'}];
    return (
        <>
            
            <div className="body-container-model">
                {desc1.map((desc) => (
                    <div className="search-container-main-model">
                        <div className="container1">
                            <div className='container1-descTop'>{desc.head}  <span>{desc.head2}</span> </div>                
                            {search_Menu.map((menu, menu_index) => (
                                <div className="container-menu">
                                    <li key={menu_index}><a href="#"> {menu} </a></li>
                                </div>
                            ))}
                        </div>
                        
                        <div className="body1-cotainer-serchbar">
                            <div className="searchbar-container-location-finder searchbar-container"> 
                                <PiMapPinFill className='search-marker' />
                                <input type="text" placeholder='Add more' className='outlined-address' onKeyUp='' />
                            </div>
                            <div className="searchbar-container-type-finder searchbar-container">
                                <AiFillHome className='type-icon'/>
                                <span>Flat +1</span> <li><FaChevronDown /></li>
                            </div>
                            <div className="searchbar-container-budget-finder searchbar-container">
                                <RiMoneyRupeeCircleFill className='budget-icon'/>
                                <span>Budget</span> <li><FaChevronDown /></li>
                            </div>
                            <div className="searchbar-container-button searchbar-container">
                                <IoSearch className='search-icon'/>
                                <span>Search</span>
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className="image-preview-container">
                    {img_preview.map((image, index) => (
                        <div className="preview-outline" key={index}>
                            <a href={image.pre_link}><img src={image.thumbnail} alt="" /></a>
                        </div>
                    ))}                
                </div>
            </div>    
            <div className="body-general-properties">
                <div className="general-properties-header">
                    {desc2.map((desc) => (
                        <div className="properties-header-title">
                            <div className="header-title">{desc.prop_header}</div>
                            <div className='outline'></div>
                        </div>
                    ))}
                    
                    <div className="geaneral-properties-container">
                        {general_properties.map((general, index) => (
                            <div className="properties-container-type" key={index}>
                                <a href={general.property_link}><img src={general.property} alt="" /></a>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className="body-properties-label">
                {desc2.map((desc) => (
                    <div className="properties-label-title">
                        <div className="label-header-title">{desc.pop_header}</div>
                        <div className='outline'></div>
                    </div>
                ))}
                <div className="properties-label-content">
                    <div className="label-header-image">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>   
    )
}
