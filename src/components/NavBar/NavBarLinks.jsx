import React from 'react'
import './NavBar.css'
import { FaAngleDown } from 'react-icons/fa'

export const BuyOptions = () => {
  return (
    <div className='Options-navBar'>
        <div className="navbar-options">Buy <span className='downArrow-icon'><FaAngleDown /></span></div>
        <div className='Options-main-model'>
            <div className="Options-conatainer-model">
                <li className='options-heading'>Popular Chhoices</li>
                <li><hr /></li>
                <li>Ready to Move</li>
                <li>Owner Properties</li>
                <li>Budget Homes</li>
                <li>Premium Homes</li>
                <li>New Projects <span>new</span></li>
            </div>
            <div className="Options-conatainer-model">
                <li className='options-heading'>Properties Types</li>
                <li><hr /></li>
                <li>Flats in New-Delhi</li>
                <li>House for sale in New...</li>
                <li>Villa in New-Delhi</li>
                <li>Plots in New-Delhi</li>
                <li>Office in New...</li>
                <li>Commercial Sapace in ...</li>
            </div>
            <div className="Options-conatainer-model">
                <li className='options-heading'>Budget</li>
                <li><hr /></li>
                <li>Under ₹ 50 Lac</li>
                <li>₹ 50 Lac - ₹ 1 Cr</li>
                <li>₹ 1 Cr - ₹ 1.5 Cr</li>
                <li>Above ₹ 1.5 Cr</li>
            </div>
            <div className="Options-conatainer-model">
                <li className='options-heading'>Explore</li>
                <li><hr /></li>
                <li>Localities in New-Delhi</li>
                <li>Projects in New-Delhi</li>
                <li>Investment Hotspot</li>
                <li>Find an Agent</li>
                <li>Home Interiors in Ne...</li>
            </div>
            <div className="Options-conatainer-model">
                <li className='options-heading'>Buying Tools</li>
                <li><hr /></li>
                <li>Prop Worth</li>
                <li>Rates & Trends</li>
                <li>Buy vs Rent</li>
                <li>Tips and Guides</li>
            </div>
            
        </div>
    </div>
    
  )
}


export const RentOptions = () => {
    return (
      <div className='Options-navBar'>
          <div className="navbar-options">Rent <span className='downArrow-icon'><FaAngleDown /></span></div>
          <div className='Options-main-model'>
              <div className="Options-conatainer-model">
                  <li className='options-heading'>Popular Chhoices</li>
                  <li><hr /></li>
                  <li>Owner Properties</li>
                  <li>Verified Properties</li>
                  <li>Furnished Homes</li>
                  <li>Bachelor Friendly Ho...</li>
                  <li>Immediately Available</li>
              </div>
              <div className="Options-conatainer-model">
                  <li className='options-heading'>Properties Types</li>
                  <li><hr /></li>
                  <li>Flat for rent in New-Delhi</li>
                  <li>House for rent in New...</li>
                  <li>Villa for rent in New-D...</li>
                  <li>PG in New-Delhi</li>
                  <li>Office Space in New-...</li>
                  <li>Commercial Sapace in ...</li>
                  <li>Coworking Space in New...</li>
                  <li>Coliving Space in New...</li>
                  <li>Student Hostels in Ne...</li>
                  <li>Luxury PG in New-Del...</li>
              </div>
              <div className="Options-conatainer-model">
                  <li className='options-heading'>Budget</li>
                  <li><hr /></li>
                  <li>Under ₹ 10,000</li>
                  <li>₹ 10,000 - ₹ 15,000</li>
                  <li>₹ 15,000 - ₹ 25,000</li>
                  <li>Above ₹ 25,000</li>
              </div>
              <div className="Options-conatainer-model">
                  <li className='options-heading'>Explore</li>
                  <li><hr /></li>
                  <li>Localities</li>
                  <li>Buy vs Rent</li>
                  <li>Find an Agent</li>
                  <li>Share Requirement</li>
                  <li>Properties Services</li>
                  <li>Rent Agreement</li>
              </div>
              <div className="Options-conatainer-model">
                  <li className='options-heading'>Buying Tools</li>
                  <li><hr /></li>
                  <li>Prop Worth</li>
                  <li>Rates & Trends</li>
                  <li>Buy vs Rent</li>
                  <li>Tips and Guides</li>
              </div>
              
          </div>
      </div>
      
    )
}


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
                <div className="Options-conatainer-model">
                    <li className='options-heading'>For Agent & Builder</li>
                    <li><hr /></li>
                    <li>My Dashboard</li>
                    <li>Ad Packages</li>
                    <li>iAdvantage</li>
                    <li>Developer Lounge</li>
                    <li>Sales Enquiry</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Selling Tools</li>
                    <li><hr /></li>
                    <li>Property Evaluation</li>
                    <li>Find an Agent</li>
                    <li>Rates & Trends</li>
                    <li>PropWorth</li>
                </div>                
            </div>
        </div>        
    )
}



export const HomeLoanOptions = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Home Loan <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model Loan-model'>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Apply Now</li>
                    <li><hr /></li>
                    <li>Home Loans</li>
                    <li>Balance Transfer</li>
                    <li>Loan Against Property</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Partners</li>
                    <li><hr /></li>
                    <li>SBI Home Loan</li>
                    <li>HDFC Ltd Home Loan</li>
                    <li>Axis Home Loan</li>
                    <li>Kotak Home Loan</li>
                    <li>LIC HF Home Loan</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Explore</li>
                    <li><hr /></li>
                    <li>Home Loan EMI Calculator</li>
                    <li>Home Loan Eligibility</li>                    
                    <li>Get Home Loan Offers <span>new</span></li>
                    <li>Check Credit Score</li>
                    <li>Home Loan Repayment</li>
                    <li>Home Loan Interest Rate</li>
                    <li>Home Loan Balance Transfer</li>
                    <li>Home Loan Documentation</li>
                </div>  
                <div className="Options-conatainer-model">
                    <li className='options-heading'>EMI Calculator</li>
                    <li><hr /></li>
                    <li>HoSBI Home Loan EMI Calculator</li>
                    <li>HDFC Home Loan EMI Calculator</li>                    
                    <li>Axis Bank Home Loan EMI Calculator</li>
                    <li>Bajaj Home Loan EMI Calculator</li>
                    <li>Kotak Home Loan EMI Calculator</li>
                    <li>L&T Home Loan EMI CAlculator</li>
                </div>  
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Interest Rates</li>
                    <li><hr /></li>
                    <li>HoSBI Home Loan Interest Rate</li>
                    <li>HDFC Home Loan Interest Rate</li>                    
                    <li>Axis Bank Home Loan Interest Rate</li>
                    <li>Bajaj Home Loan Interest Rate</li>
                    <li>Kotak Home Loan Interest Rate</li>
                    <li>L&T Home Loan Interest Rate</li>
                </div>                
            </div>
        </div>        
    )
}



export const HomeInteriors = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Home Interiors <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model Interior-model'>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Home Interior Design Ideas</li>
                    <li><hr /></li>
                    <li>Modular Integer Design Ideas</li>
                    <li>False Ceiling Design Ideas</li>
                    <li>Bathroom Design Ideas</li>
                    <li>Bedroom Design Ideas</li>
                    <li>TV Unit Design Ideas</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Full Home Interior Designs</li>
                    <li><hr /></li>
                    <li>1BHK Interior Design</li>
                    <li>2BHK Interior Design</li>
                    <li>3BHK Interior Design</li>
                    <li>4BHK Interior Design</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Explore Our Services</li>
                    <li><hr /></li>
                    <li>Home Interior Design Services</li>
                    <li>Interior Designers in New-Delhi</li>
                    <li>Design Consultation</li>
                    <li>Full Home Interior Cost Calculator</li>
                    <li>Kitchen / Wardrobe Calculator</li>
                </div>
                
            </div>
        </div>
      
    )
}



export const MbAdvice = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">MB Advice <span>new</span> <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model Mb-model'>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>MB Research</li>
                    <li><hr /></li>
                    <li>Insights</li>
                    <li>Research</li>
                    <li>Prop Index</li>
                    <li>Find Pincode</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Services & Tools</li>
                    <li><hr /></li>
                    <li>Property Valuation <span>new</span></li>
                    <li>Rates &Trends</li>
                    <li>Area Converter</li>
                    <li>PropWorth</li>
                    <li>Buy v/s Rent</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>Localities & Projects</li>
                    <li><hr /></li>
                    <li>Localities in New-Delhi</li>
                    <li>Locality Review Videos</li>
                    <li>Compare Localities</li>
                    <li>New Projects in New-De...</li>
                    <li>Project Review Videos</li>
                    <li>MBTV Videos</li>
                </div>
                <div className="Options-conatainer-model">
                    <li className='options-heading'>News & Blogs</li>
                    <li><hr /></li>
                    <li>Latest Blogs</li>
                    <li>Lifestyle</li>
                    <li>Policies Localities</li>
                    <li>Finance & Legal</li>
                    <li>City Blogs</li>
                    <li>Property News</li>
                    <li>Trending Web Stories</li>
                </div>
            </div>
        </div>      
    )
}



export const Help = () => {
    return (
        <div className='Options-navBar'>
            <div className="navbar-options">Help <span className='downArrow-icon'><FaAngleDown /></span></div>
            <div className='Options-main-model'>
                <div className="Options-conatainer-model">                    
                    <li>Help Center</li>
                    <li>Sales Enquiry</li>
                </div>
            </div>
        </div>      
    )
}
