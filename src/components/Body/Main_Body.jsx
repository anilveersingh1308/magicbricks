import React from 'react'
import './Body.css'
import { f_property, t_property, project, general_properties, property, search_Menu, service, snap } from './DataArray'
import { FaArrowRight, FaChevronDown, } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { RiMoneyRupeeCircleFill, RiMoneyRupeeCircleLine } from 'react-icons/ri'
import { PiMapPinFill } from 'react-icons/pi'
import { IoSearch } from 'react-icons/io5'
import expo from '../../assets/expo_img.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'
import { MBAgentsContainer, OwnerProjects, Projects } from './Projects'
import { MmProperties, PropertiesOptions, RecommendedProjects, ResidencialProjects, } from './PropertiesOptions'
import { SlideShow } from './SlideShow'



export const Main_Body = () => {
    const desc1 = [{head: 'Find a home you\'ll', head2: 'Love', s_header: 'New Delhi Property Snapshot', f_header: 'Fresh Properties in New Delhi'}];
    const desc2 = [{prop_header: 'We\'ve got properties for everyone', pop_header: 'Popular Owner Properties', f_header: 'Featured Projects', t_header: 'Top Projects', g_header: 'New Project Gallery'}];
    const desc3 = ['An Exclusive Showcase - Homethon Property Expo 2024 by NAREDCO'];
    const desc4 = [{mb_header:'MB Preferred Agents in New Delhi', res_header: 'Browse Residential Projects in Top 8 Cities', rec_header: 'Recommended for You', topProp_header:'Property Options in Mumbai '}];
    
    
    return (
        <div className='searchBar'>
            <div className='body-container'>
                
                <div className="body-container-model">

                    {/*-------------------------- Search Bar Area --------------------------------------------- */}

                    {desc1.map((desc) => (
                        <div className="search-container-main-model">
                            <div className="container1">
                                <div className='container1-descTop'>{desc.head}  <span>{desc.head2}</span> </div>                
                                {search_Menu.map((menu, menu_index) => (
                                    <div className="container-menu">
                                        <li key={menu_index}><a href="#" style={{color:'rgba(0,0,0,0.83)'}}> {menu} </a></li>
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
                                    <span>House/Villa</span> <li><FaChevronDown /></li>
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

                    {/*-------------------------- Images preview --------------------------------------------- */}
                    
                    <div className="image-preview-container">
                        <SlideShow />
                    </div>
                </div>    

                {/*-------------------------- Properties for Everyone --------------------------------------------- */}

                <div className="general-properties-header">
                    {desc2.map((desc) => (
                        <div className="properties-header-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.prop_header}</div>
                                <div className='outline'></div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="geaneral-properties-container">
                        {general_properties.map((general, index) => (
                            <div className='container-content'>
                                <div className="properties-container-bg" key={index}>
                                    <img src={general.property} alt="" />
                                </div>
                                {general.near_property.map((nearBy, nIndex) => (
                                    <div className="properties-container-content" key={nIndex} style={{display: 'block'}}>
                                        <div className='count'>{nearBy.property_count}</div>  
                                        <div className='type'>{nearBy.type}</div>
                                        <div className="exp">Explore <span><FaArrowRight /> </span></div>
                                    </div>                                    
                                ))}                                
                            </div>                                                  
                        ))}                        
                    </div>
                </div>
                
                {/*-------------------------- Exclusive Showcase Expo --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc3.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc}</div>
                                <div className='outline'></div>
                            </div>
                        </div>
                    ))}
                    <div className="expo-container">
                        <img src={expo} alt="" />    
                    </div>       
                </div>

                {/*----------------------------------------- Featured Project --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc2.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.f_header}</div>
                                <div className='outline'></div>
                            </div>
                            <div className="label-right fRight" id='icon'>See all Properties <HiArrowNarrowRight className='icon'/></div>
                        </div>
                    ))}
                    {f_property.map((propLoc, pIndex) => (
                        <div className="properties-label-content flabel-content" key={pIndex}>
                            <div className="label-header-image flabel-image">
                                <img src={propLoc.p_img} alt="" />
                            </div>
                            <div className="flabel-container">
                                <div className="container1">
                                    <img src={propLoc.p_logo} alt="" />
                                </div>
                                <div className="container2">
                                    <div className="container-prop-title">{propLoc.title}</div>
                                    <div className="container-prop-cons">{propLoc.cons} </div>
                                    <div className="container-prop-area">{propLoc.loc}</div>
                                    <div className="container-prop-ad">Marketed {propLoc.cons}</div>
                                </div>
                                <div className="container3">
                                    <div className="container-prop-type">{propLoc.type}</div>
                                    <div className="container-prop-rate">{propLoc.price} <span>onwards</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*-------------------------- Popular Owner Properties --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc2.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.pop_header}</div>
                                <div className='outline'></div>
                            </div>
                            <div className="label-right">See all Properties <HiArrowNarrowRight className='icon'/></div>
                        </div>
                    ))}
                    <OwnerProjects />
                </div>

                {/*-------------------------- MB Preferred Agents --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc4.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.mb_header}</div>
                                <div className='outline mb-outline'></div>
                            </div>
                            <div className="label-right">See all Agents <HiArrowNarrowRight className='icon'/></div>
                        </div>
                    ))}
                    <MBAgentsContainer />
                </div>

                {/*-------------------------- Property Services --------------------------------------------- */}

                <div className="body-properties-label">                
                    <div className="properties-label-title">
                        <div className="lable-left">
                            <div className="label-header-title">Property Services</div>
                            <div className='outline'></div>
                        </div>
                    </div>
                    {service.map((services, pIndex) => (
                        <div className="properties-label-content" key={pIndex}>
                            <div className="label-header-image">
                                <img src={services.service_img} alt="" />
                            </div>
                            
                            <div className="label-container">
                                <div className="container-service-heading">{services.head}</div>                            
                                <div className="container-service-body">{services.body}</div>
                            </div>

                        </div>
                    ))}
                </div>

                {/*------------------------------------------- Property Worth ----------------------------------------- */}

                <div className="body-properties-label worth-container">                
                    <div className="snapshot-label-content Prop-worth-label-content">
                        <div className="prop-worth">
                            <div className="prop-worth-container1">
                                <div className="worth-log-container"><RiMoneyRupeeCircleLine /></div>
                                <div className="worth-title-container">PropWorth</div>
                            </div>
                            <div className="prop-worth-container2">Check Estimated Transaction Price of any Property</div>
                            <div className="prop-worth-container3">
                                <li><TiTick className='worth-sign'/> <span>98% accuracy backed by AI powered precision</span></li>
                                <li><TiTick className='worth-sign'/> <span>insight from 1 Crore + listings posted manually</span></li>
                            </div>
                        </div>
                        <div className="prop-worth prop-worth-right">
                            <div className="prop-worth-container-finder">
                                <div className="worth-estimate">
                                    <div className="estimate-search">
                                        <input type="text" placeholder='Enter Project/Locality' className='worth-input'/>
                                        <input type="submit" value='Get Estimate' className='worth-button' />
                                    </div>
                                    <div className="worth-estimate-desc">Most accurate estimate in just 30 seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-------------------------- Top Projects --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc2.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.t_header}</div>
                                <div className='outline'></div>
                            </div>
                            <div className="label-right tRight">See all Properties <HiArrowNarrowRight className='icon'/></div>
                        </div>
                    ))}
                    {t_property.map((propLoc, pIndex) => (
                        <div className="properties-label-content tlabel-content" key={pIndex}>
                            <div className="label-header-image tlabel-image">
                                <img src={propLoc.p_img} alt="" />
                            </div>
                            
                            <div className="label-container">                            
                                <div className="tcontainer-prop-title">{propLoc.title}</div>                           
                                <div className="tcontainer">
                                    <div className="tcontainer-prop">{propLoc.cons} </div>
                                    <div className="tcontainer-prop">{propLoc.loc}</div>                                
                                </div>
                                <div className="tcontainer">
                                    <div className="tcontainer-prop-type">{propLoc.type}</div>
                                    <div className="container-prop-rate tcontainer-prop-rate">{propLoc.price} <span>onwards</span></div>
                                </div>
                                <div className="tcontainer-prop-ad">Marketed {propLoc.ads}</div>
                                
                            </div>

                        </div>
                    ))}
                </div>

                
                {/*-------------------------- Projects Gallery --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc2.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.g_header}</div>
                                <div className='outline gOutline'></div>
                            </div>
                            <div className="label-right gRight">See all Properties <HiArrowNarrowRight className='icon'/></div>
                        </div>
                    ))}
                    <Projects />
                </div>

                {/*-------------------------- Fresh Properties in New Delhi --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc1.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.f_header}</div>
                                <div className='outline'></div>
                            </div>
                            <div className="label-right">See all Properties <HiArrowNarrowRight className='icon'/></div>
                        </div>
                    ))}
                    <OwnerProjects />
                </div>

                {/*-------------------------- Property Snapshot --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc1.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.s_header}</div>
                                <div className='outline'></div>
                            </div>
                        </div>
                    ))}
                    {snap.map((snapContent) => (
                        <div className="snapshot-label-content">
                            <div className="snap-container">
                                <div className="container-extent">{snapContent.ext}... <a href=""><span>Read more</span></a> </div>
                            </div>
                            {snapContent.desig.map((snaps, sIndex) => (
                                <div className='snap-pros'>
                                    <div  key={sIndex}>
                                        <div className="count">{snaps.count}</div>
                                        <div className="value">{snaps.value}</div>
                                    </div>                                    
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/*-------------------------- Post your own Property --------------------------------------------- */}

                <div className="body-properties-label Post-property">                
                    <div className="snapshot-label-content post-label-content">
                        <div className="post">
                            <div className="post-container1">Post your Property for <span>Free</span></div>
                            <div className="post-container2">List it on Magicbricks and get genuine leads</div>
                        </div>
                        <div className="post post-right">
                            <div className="post-container-navigator">Post Property <span>Free</span></div>
                        </div>
                    </div>
                </div>

                {/*-------------------------- Properties Options in Mumbai --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc4.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">
                                    {desc.topProp_header} 
                                </div>
                                <div className='outline'></div>
                            </div>
                        </div>
                    ))}
                    <MmProperties />
                </div>

                {/*-------------------------- Residencial Projects --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc4.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.res_header}</div>
                                <div className='outline'></div>
                            </div>
                        </div>
                    ))}
                    <ResidencialProjects />
                </div>

                {/*-------------------------- Recommended --------------------------------------------- */}

                <div className="body-properties-label">
                    {desc4.map((desc) => (
                        <div className="properties-label-title">
                            <div className="lable-left">
                                <div className="label-header-title">{desc.rec_header}</div>
                                <div className='outline'></div>
                            </div>
                        </div>
                    ))}
                    <RecommendedProjects />
                </div>
            </div>   
        </div>
    )
}
