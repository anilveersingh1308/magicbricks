import React from 'react'
import './NavBar.css'
import { FaAngleDown } from 'react-icons/fa'
import { buy_options, rent_options, sell_options, homeLoan_options, homeInterior_options, advice_options, help_options} from '../LinksArray'

/* -------------------------------- Buy category options ----------------------------------- */
export const BuyOptions = () => {
  return (
    <div className='Options-navBar'>
        <div className="navbar-options">Buy <span className='downArrow-icon'><FaAngleDown /></span></div>
        <div className='Options-main-model'>
            {buy_options.map((options, opIndex) => (
                <div className="Options-conatainer-model" key={opIndex}>
                    <li className='options-heading'>{options.Head}</li>
                    <li><hr /></li>
                    {options.sublink.map((subOptions, subIndex) => (
                        <div>
                            <li key={subIndex}>
                                {subOptions.name}                                                 
                            </li>                            
                        </div>
                        
                    ))}
                </div>
            ))}            
        </div>
    </div>
    
  )
}

/* --------------------------------- Rent category options --------------------------------- */
export const RentOptions = () => {
    return (
      <div className='Options-navBar'>
          <div className="navbar-options">Rent <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model'>
                {rent_options.map((options, opIndex) => (
                    <div className="Options-conatainer-model" key={opIndex}>
                        <li className='options-heading'>{options.Head}</li>
                        <li><hr /></li>
                        {options.sublink.map((subOptions, subIndex) => (
                            <li key={subIndex}>
                                {subOptions.name}                                                      
                            </li>
                        ))}
                    </div>
                ))}   
            </div>
      </div>
      
    )
}

/* --------------------------------- Sell category options --------------------------------- */
export const SellOptions = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Sell <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model'>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>For Owner</li>
                    <li><hr /></li>
                    <li>Owner Properties</li>
                    <li>Post Property <span>free</span></li>
                    <li>My Dashboard</li>
                    <hr style={{margin: '10px 0'}}/>
                    <li>Sell / Rent Ad Packages</li>
                    <li style={{cursor: 'text'}} className='sell-cont'>+919870260930 / <a href="#">Email Us</a></li>
                </div>
                {sell_options.map((options, opIndex) => (
                    <div className="Options-conatainer-model" key={opIndex}>
                        <li className='options-heading'>{options.Head}</li>
                        <li><hr /></li>
                        {options.sublink.map((subOptions, subIndex) => (
                            <li key={subIndex}>
                                {subOptions.name}                                                      
                            </li>
                        ))}
                    </div>
                ))}         
            </div>
        </div>        
    )
}

/* --------------------------------- Home Loan category options ---------------------------- */
export const HomeLoanOptions = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Home Loan <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model Loan-model'>
                {homeLoan_options.map((options, opIndex) => (
                    <div className="Options-conatainer-model" key={opIndex}>
                        <li className='options-heading'>{options.Head}</li>
                        <li><hr /></li>
                        {options.sublink.map((subOptions, subIndex) => (
                            <li key={subIndex}>
                                {subOptions.name}                                                      
                            </li>
                        ))}
                    </div>
                ))}   
            </div>
        </div>        
    )
}

/* --------------------------------- Home Interior category options ------------------------ */
export const HomeInteriors = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Home Interiors <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model Interior-model'>
                {homeInterior_options.map((options, opIndex) => (
                    <div className="Options-conatainer-model" key={opIndex}>
                        <li className='options-heading'>{options.Head}</li>
                        <li><hr /></li>
                        {options.sublink.map((subOptions, subIndex) => (
                            <li key={subIndex}>
                                {subOptions.name}                                                      
                            </li>
                        ))}
                    </div>
                ))}                   
            </div>
        </div>
      
    )
}

/* --------------------------------- MB Advice category options ---------------------------- */
export const MbAdvice = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">MB Advice <span>new</span> <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model Mb-model'>
                {advice_options.map((options, opIndex) => (
                    <div className="Options-conatainer-model" key={opIndex}>
                        <li className='options-heading'>{options.Head}</li>
                        <li><hr /></li>
                        {options.sublink.map((subOptions, subIndex) => (
                            <li key={subIndex}>
                                {subOptions.name}                                                      
                            </li>
                        ))}
                    </div>
                ))}   
            </div>
        </div>      
    )
}

/* --------------------------------- Help category options --------------------------------- */
export const Help = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Help <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model help-container'>
            {help_options.map((options, opIndex) => (
                    <div className="Options-conatainer-model" key={opIndex}>                        
                        <li className='options-heading'>{options.name}</li>                                              
                    </div>
                ))}   
            </div>
        </div>      
    )
}
