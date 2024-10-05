import React from 'react'
import './Footer.css'
import pt1 from '../../assets/play-store-badge.png'
import pt2 from '../../assets/app-store-badge.jpg'
import pt3 from '../../assets/facebook-badge.jpg'
import pt4 from '../../assets/twitter-badge.png'
import pt5 from '../../assets/linkedin-badge.png'
import pt6 from '../../assets/youtube-badge.png'
import pt7 from '../../assets/insta-badge.jpg'
import { RiCopyrightLine } from 'react-icons/ri'

export const Footer = () => {
    const net = [
        'Times of India', 'Economic Times', 'Navbharat Times', 'India Times', 'FilmFare', 'MensXp', 'iDiva', 'TimesJobs', 'Gadget Now',
    ];
    const pt_img = [
        {lg_img: [pt1, pt2,], sl_img: [pt3, pt4, pt5, pt6, pt7,],},
    ];
    const prop = ['New Delhi', 'Mumbai', 'Chennai', 'Pune', 'Noida', 'Gurgaon', 'Bangalore', 'Ahmedabad'];
    const menu = ['Sitemap', 'Terms & Conditions', 'Privacy Policy', 'Blog', 'Careers', 'Testimonials', 'Unsubscribe', 'Help Center', 'Sales Enquiry', 'Buy Our Services'];
  return (
    <div>
        <div className="footer-container-state1">
            <div className="container-state1-division division">
                <div className="container-state1-division-first">
                    <div className="division-part-extent">
                        <div className="extent-heading heading">About Magicbricks</div>
                        <div className="extent-content-main">
                            As the largest platform connecting property buyers and sellers, ...
                            <span><a href="#">Read more</a></span>
                        </div>
                    </div>
                    <div className="division-part-network display">
                        <div className="network-heading heading">More from our anetwork</div>
                        <div className="network-content">
                            {net.map((network, nIndex) => (
                                <li key={nIndex}><a href="" className="sub-link">{network}</a> </li>
                            ))}
                        </div>
                    </div>
                    <div className="division-part-platform display">
                            {pt_img.map((pt) => (
                                <div className="platform-lg">
                                    <div className='icon'>
                                        {pt.lg_img.map((ptImg, PIndex) => (
                                            <li key={PIndex}><img src={ptImg} alt="" className='big-icon' /></li>
                                        ))}
                                    </div>                                    
                                    {pt.sl_img.map((ptImg, PIndex) => (
                                        <li key={PIndex}><img src={ptImg} alt="" className='small-icon'/></li>
                                    ))}
                                
                                </div>
                            ))}
                    </div>
                </div>
                <div className="container-state1-division-second">
                    <div className="division-property">
                        <div className="property-heading heading">Properties in India</div>
                        <div className="property-location display">
                            {prop.map((property, pIndex) => (
                                <div key={pIndex}>
                                    {pIndex + 1 < prop.length ? (
                                        <li><a href="" className="sub-link"> Property in {property}</a> <span></span> </li>
                                    ) : (
                                        <li><a href="" className="sub-link"> Property in {property}</a> </li>
                                    )}
                                </div>
                                
                            ))}

                        </div>
                    </div>
                    <div className="division-projects">
                        <div className="projects-heading heading">New Projects in India</div>
                        <div className="projects-location display">
                            {prop.map((projects, pIndex) => (
                                <div key={pIndex}>
                                    {pIndex + 1 < prop.length ? (
                                        <li><a href="" className="sub-link">New Projects in {projects}</a> <span></span> </li>
                                    ) : (
                                        <li><a href="" className="sub-link">New Projects in {projects}</a> </li>
                                    )}
                                </div>
                                
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-state2-division division">
                <div className="state2-division-menu display">
                    {menu.map((menubar, mIndex) => (
                        <li key={mIndex}><a href="" className='sub-link'>{menubar}</a> </li>
                    ))}
                </div>
            </div>
            <div className="container-state3-division division">
                <div>Disclaimer: Magicbricks Reality Services Limited is only in an intermediary offering its platform to advertise properties of seller for a Customer/Buyer/User comming
                    on its Website and is not and cannot be a party to or control in any manner any transaction between the seller and the Customer/Buyer/User. All the offers and discounts
                    on this Website have been extended by ... <span><a href="">Read more</a></span> </div>
            </div>
            <div className="container-state4-division division">
                <div className="fixed-division">
                    All trademarks, logos and names are properties of their respective owners. All Rights Reserved. <RiCopyrightLine className='icon'/>Copyright 2024 Magicbricks Reality Services Limited.
                </div>
            </div>
        </div>
    </div>
  )
}
