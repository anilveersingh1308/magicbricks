import "./LocationLinks.css"
import './Header.css'
import { FaAngleDown, FaMapMarkerAlt } from 'react-icons/fa'
import {links} from '../LinksArray'

export const LocationLinks = () => {
  return (
    <>
        {links.map((location, index) => (
            <div className='LocationLinks' key={index}>
                <div className='location-heading'>{location.name} <span><FaAngleDown /></span></div>
                <div className='location-main-model'>
                    <div className="location-left">
                        {location.country.sublink((conLocation, conIndex) => (
                            <div className='country-location' key={conIndex}>
                                <FaMapMarkerAlt style={{color: 'rgb(226,86,31)', fontSize: '14px', marginRight: '5px'}}/>
                                <span>{conLocation.name}</span>
                            </div>
                        ))}
                        {location.nearbyCity.map((nearLocation, nearIndex) => (
                            <div className="nearby-location" key={nearIndex}>
                                <div className="locations">{nearLocation.Head}</div>
                                <table className="sublocations" cols='5'>
                                    {nearLocation.sublink.map((localLocation, localIndex) => (
                                        <tr key={localIndex}>
                                            <td><li><a href={localLocation.link}> {localLocation.name}</a></li></td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        ))} 
                        {location.popularCity.map((mainLocation, mainIndex) => (
                            <div className="popular-location" key={mainIndex}>
                                <div className="locations">{mainLocation.Head}</div>
                                <table className="sublocations" cols='5'>
                                    {mainLocation.sublink.map((headLocation, headIndex) => (
                                        <tr><li><a href={headLocation.link}> {headLocation.name}</a></li></tr>
                                    ))}
                                </table>
                            </div>                            
                        ))} 
                </div>
            </div>
        </div>
        ))}
    </>
  )
}
