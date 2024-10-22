import React from 'react'
import './Body.css'
import { project, property } from './DataArray'

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
