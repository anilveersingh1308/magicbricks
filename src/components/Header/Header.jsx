import './Header.css'
import header_logo from '../../assets/mb-logo-web-white.svg'
import { LocationLinks, Login, Prime } from './LocationLinks'
import { BuyOptions, Help, HomeInteriors, HomeLoanOptions, MbAdvice, RentOptions, SellOptions } from '../NavBar/NavBarLinks'


const Header = () => {    
    return (
        <div className='header-items'>
            <div className="header-main">
                <ul className="header-left">
                    <div className='header-left-logo'><img src={header_logo} alt="" /></div>
                    <div><LocationLinks /></div>
                </ul>   
                <ul className="header-right">
                    <li><Prime /></li>                    
                    <li><Login /></li> 
                    <li className="post-property">Post Property <span>FREE</span></li>
                </ul>
            </div> 
            <div className="header-navbar">
                <div className="navBar-items">
                    <li><BuyOptions /></li>
                    <li><RentOptions /></li>
                    <li><SellOptions /></li>    
                    <li><HomeLoanOptions /></li>
                    <li><HomeInteriors /></li>
                    <li><MbAdvice /></li>
                    <li><Help /></li>
                    
                </div>
            </div>  
        </div>
        
    )
}

export default Header