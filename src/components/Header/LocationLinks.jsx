import React, { useState } from 'react'
import "./LocationLinks.css"
import './Header.css'
import logo_premium from '../../assets/premium.png'
import { FaAngleDown, FaMapMarkerAlt } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { links } from '../LinksArray'

export const LocationLinks = () => {
  return (
    <>
        {links.map((location_new, index) => (
            <div className='LocationLinks' key={index}>
                <div className='location-heading'>{location_new.name} <span><FaAngleDown /></span></div>
                <div className='location-main-model'>
                    <div className="location-left">
                        {location_new.country.map((co_location) => (
                            <div>
                            {co_location.sublink.map((cLocation) => (
                                <div className='country-location location'>
                                    <FaMapMarkerAlt style={{color: 'rgb(226,86,31)', fontSize: '14px', marginRight: '5px'}}/>
                                    <span>{cLocation.name}</span>
                                </div>
                            ))}
                            </div>                            
                        ))}
                        {location_new.nearbyCity.map((n_location) => (
                            <table className="nearby-location location">
                                <tr className="locations">{n_location.Head}</tr>
                                <tr className='near-locations'>
                                    {n_location.sublink.map((nLocation, nIndex) => (
                                        <td key={nIndex} className='subLocation'>{nLocation.name}</td>
                                    ))}                                
                                </tr>
                            </table>
                        ))}
                        {location_new.popularCity.map((pLocation, pIndex) => (
                            <table className="popular-location location" key={pIndex}>
                                <tr className="locations">{pLocation.Head}</tr>
                                <tr className='near-locations'>
                                    {pLocation.sublink.map((pcLocation, pcIndex) => (
                                        <td key={pcIndex} className='subLocation'> {pcLocation.name} </td>
                                    ))}                            
                                </tr>    
                            </table>
                        ))}                                     
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}



export const Prime = () => {
    const title = [{intro1: 'Introducing', intro2: 'MB', intro3: 'Prime'}]
    const subTitle = "Pay Zero Commission | Save Time & Money"
    const props = [{props1: 'Contact upto 30 Owners directly', props2: 'Access to Prime Exclusive Properties'}]
    return (
        <div className='Prime-main-model'>
            <div className="header-prime">MB Prime <span><FaAngleDown /></span></div>
            <div className="prime-dropdown">
                <div className="prime-model-top">
                    <div className="prime-model-logo">
                        <img src={logo_premium} alt="" />
                    </div>
                    {title.map((value, index) => (
                        <div key={index} className="prime-model-title">                                
                            <span className='prime-model-intro1'>{value.intro1}</span>
                            <span className='prime-model-intro2'>{value.intro2}</span>
                            <span className='prime-model-intro3'>{value.intro3}</span>
                        </div>                     
                    ))}
                    <div className="prime-model-sug">{subTitle}</div>
                </div>
                {props.map((name, index) => (
                    <div className='prime-props'>
                    <li><TiTick style={{color: 'green', float: 'left', paddingTop: '2px', marginRight: '5px'}} />{name.props1}</li>
                    <li><TiTick style={{color: 'green', float: 'left', paddingTop: '2px', marginRight: '5px'}} /> {name.props2}</li>
                </div> 
                ))}
                               
                <div className="prime-button">
                    <button type='submit'>Join Now</button>
                </div>                
            </div>
            
        </div>
    )
  }



export const Login = () => {
  return (
    <div className='Login-main-model'>
        <div className="header-login">Login <span><FaAngleDown /></span></div>
        <div className="login-dropdown">
            <div className='myActivity'>My Activity <span><hr /></span></div>
            <li> Requested Properties <span>new</span></li>
            <li>Contacted Properties</li>
            <li>Viewed Properties</li>
            <li>Shortlisted Properties</li>
            <li>Searches</li>
            <li><hr /></li>
            <li>Recommendations</li>
            <li>My Profile</li>
            <li><hr /></li>
            <div className="login-button">
                <button type='submit'>Login</button>
            </div>
            <div className="optional-signup">
                New To MagicBrocks? <span><a href="#">Sign Up</a></span>
            </div>
        </div>
        
    </div>
  )
}
