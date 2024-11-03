import React from 'react'
import './Body.css'
import { agent, project, property } from './DataArray'

export const Projects = () => {    
    return (
        <div>
            {project.slice(0, 6).map((prj, pIndex) => (
                    <div className="properties-label-content glabel-content" key={pIndex}>
                        <div className="label-header-image glabel-image">
                            <img src={prj.pj_img} alt="" />
                        </div>
                        
                        <div className="label-container">                            
                            <div className="tcontainer-prop-title">{prj.title}</div>                           
                            <div className="tcontainer">
                                <div className="tcontainer-prop">{prj.cons} </div>
                                <div className="tcontainer-prop">{prj.loc}</div>                                
                            </div>
                            <div className="tcontainer">
                                <div className="tcontainer-prop-type">{prj.type}</div>
                                <div className="container-prop-rate tcontainer-prop-rate">{prj.price} <span>onwards</span></div>
                            </div>
                            <div className="tcontainer-prop-ad">Marketed {prj.ads}</div>
                            
                        </div>

                    </div>
                ))}
        </div>
    );
}

export const OwnerProjects = () => {
    return (
        <div>
            {property.slice(0, 4).map((propLoc, pIndex) => (
                <div className="properties-label-content" key={pIndex}>
                    <div className="label-header-image">
                        <img src={propLoc.prop_img} alt="" />
                    </div>
                    
                    <div className="label-container">
                        <div className="container-prop-type">{propLoc.type}</div>
                        <div className="container-prop-rate">{propLoc.price} <span>{propLoc.divider}</span> {propLoc.prop_area}</div>
                        <div className="container-prop-local">{propLoc.location}</div>
                        <div className="container-prop-state">{propLoc.status}</div>
                    </div>
                    <div className="container-details">
                        <div className="details-section">
                            <button className="details-button">View Details</button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}


export const MBAgentsContainer = () => {
    return (
        <div>
            {agent.slice(0, 4).map((mbAgent, pIndex) => (
                <div className="properties-label-content" key={pIndex}>
                    <div className='preferred-label-header'>
                        <div className='preferred-label-img'>
                            <img src={mbAgent.agent_img} alt="" />
                        </div>
                        <div className='label-header-title' style={{lineHeight:'16px', paddingTop:'5px'}}>
                            <div style={{color:'rgb(0, 230, 230)', fontSize: '13px', letterSpacing:'0.5px'}}>MB Preferred</div>
                            <div style={{color:'rgba(0,0,0,0.8)', fontWeight:'600', letterSpacing:'0.4px'}}>{mbAgent.name}</div>
                        </div>
                    </div>
                    {mbAgent.company.map((mb, mIndex) => (
                        <div key={mIndex} className='preferred-label-body'>
                            <div>
                                <img src={mb.img} alt="" />
                            </div>
                            <div>
                                <div className='body-label-header' style={{fontWeight:'600', color:'rgba(0,0,0,0.8)', letterSpacing:'0.2px', fontSize:'12px'}}>{mb.name}</div>
                                
                                <div className='body-label-container'>
                                    <div>Operating Since {mb.year}</div>
                                    <div style={{background:'rgba(0,0,0,0.6)', height:'30px', width:'0.2px', marginRight:'10px',marginTop:'4px'}}></div>
                                    <div>Buyers Served {mb.emp}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />
                    
                    <div style={{display:'flex', padding:'10px', fontSize:'14px', gap:'20px'}}>
                        <div className='label-footer'>
                            <div style={{fontWeight:'600'}} className='footer-count'>{mbAgent.sale}</div>
                            <div>Properties for Sale</div>
                        </div>
                        <div className='label-footer'>
                            <div style={{fontWeight:'600'}} className='footer-count'>{mbAgent.rent}</div>
                            <div>Properties for Rent</div>
                        </div>
                    </div>
                    <div className="container-details" style={{width:'inherit', border:'transparent', margin:'0'}}>
                        <div className="details-section" style={{float:'right', marginRight:'20px'}}>
                            <button className="details-button">View Details</button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
