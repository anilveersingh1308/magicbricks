import React, { useState } from 'react'
import "./LocationLinks.css"
import './Header.css'
import logo_premium from '../../assets/premium.png'
import { FaAngleDown, FaMapMarkerAlt } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'

export const LocationLinks = () => {
  return (
    <>
        
        <div className='LocationLinks'>
            <div className='location-heading'>New-Delhi <span><FaAngleDown /></span></div>
            <div className='location-main-model'>
                <div className="location-left">
                    <div className='country-location'>
                        <FaMapMarkerAlt style={{color: 'rgb(226,86,31)', fontSize: '14px', marginRight: '5px'}}/>
                        <span>India</span>
                    </div>
                    <div className="nearby-location">
                        <div className="locations">Nearby Cities</div>
                        <div className="sublocations">
                            <tr><li>Gurgaon</li><li>Greater Noida</li><li>Ghaziabad</li><li>Noida</li></tr>
                        </div>
                    </div>
                    <div className="popular-location">
                        <div className="locations">Popular Cities</div>
                        <div className="sublocations">
                            <tr><li>Ahmedabad</li><li>Banglore</li><li>Beyond Thane</li><li>Chennai</li><li>Gurgaon</li></tr>
                            <tr><li>Hyderabad</li><li>Indore</li><li>Jaipur</li><li>Kolkata</li><li>Lucknow</li></tr>
                            <tr><li>Mumbai</li><li>Banglore</li><li>New Delhi</li><li>Noida</li><li>Pune</li></tr>
                            <tr><li>Thane</li></tr>
                        </div>
                    </div>
                    <div className="other-locations">
                    <div className="locations">Other Cities</div>
                        <div className="sublocations">
                            <tr><li>Agra</li><li>Ahmadanagar</li><li>Allahabad</li><li>Aluva</li><li>Amritsar</li></tr>
                            <tr><li>Aurangabad</li><li>Badlapur</li><li>Bareilly</li><li>Belgaum</li><li>Bhiwadi</li></tr>
                            <tr><li>Bhiwandi</li><li>Bhopal</li><li>Bhubneswar</li><li>Bokaro Steel City</li><li>Chandigarh</li></tr>
                            <tr><li>Chengalpattu</li><li>Coimbatore</li><li>Dehradun</li><li>Durgapur</li><li>Ernakulam</li></tr>
                            <tr><li>Erode</li><li>Faridabad</li><li>Ghaziabad</li><li>Goa</li><li>Gorakhpur</li></tr>
                            <tr><li>Greater Noida</li><li>Badlapur</li><li>Bareilly</li><li>Belgaum</li><li>Bhiwadi</li></tr>
                            <tr><li>Bhiwandi</li><li>Guntur</li><li>Guwahati</li><li>Gwalior</li><li>Haridwar</li></tr>
                            <tr><li>Hosur</li><li>Hubli</li><li>Jabalpur</li><li>Jalandhar</li><li>Jammu</li></tr>
                            <tr><li>Jamshedpur</li><li>Jodhpur</li><li>Kalyan</li><li>Kannur</li><li>Kanpur</li></tr>
                            <tr><li>Khopoli</li><li>Kochi</li><li>Kodaikanal</li><li>Kottayam</li><li>kozhikode</li></tr>
                            <tr><li>Lonavala</li><li>Ludhiana</li><li>Madurai</li><li>Mangalore</li><li>Mohali</li></tr>
                            <tr><li>Mysore</li><li>Nagpur</li><li>Nainital</li><li>Nanded</li><li>Nashik</li></tr>
                            <tr><li>Navsari</li><li>Nellore</li><li>Newtown</li><li>Ooty</li><li>Palakkad</li></tr>
                            <tr><li>Palghar</li><li>Punchkula</li><li>Patiala</li><li>Patna</li><li>Pondicherry</li></tr>
                            <tr><li>Raipur</li><li>Rajahmundry</li><li>Ranchi</li><li>Salem</li><li>Satara</li></tr>
                            <tr><li>Shimla</li><li>Siliguri</li><li>Solapur</li><li>Sonipat</li><li>Surat</li></tr>
                            <tr><li>Thanjavur</li><li>Thrissur</li><li>Tirunelveli</li><li>Tirupati</li><li>Tirupur</li></tr>
                            <tr><li>Trichy</li><li>Trivandrum</li><li>Tumkur</li><li>Udaipur</li><li>Udupi</li></tr>
                            <tr><li>Vadodara</li><li>Vapi</li><li>Varanasi</li><li>Vijayawada</li><li>Vishakhapatnam</li></tr>
                            <tr><li>Vrindavan</li><li>Zirakpur</li></tr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
