import React from 'react'
import Creath from './footer_logo.png'
import Twitter from './twitter.png'
import Instagram from './instagram.png'
import Medium from './medium.png'
import Discord from './discord.png'
import LinkedIn from './linkedin.png'
import './footer.css'

const Footer = ()=>{
    return(
        <div className='footer_main'>
            <h1>Creath NFT Marketplace</h1>
            <p className="header_p">Where Digital Meets Physical</p>
            <div className='footer_buttons'>
                <button>Become a Creator</button>
                <button>Hire a Talent</button>
                <button>Blog</button>
                <button>Terms and Condition</button>
                <button className='odd'>Resources</button>
            </div>
            <div className='footer_logos'>
                <img src={Creath} alt="Creath Logo: Where digital meets physical" className='footer_creath'/>
                <div className='social_logo'>
                    <img src={Instagram} alt="Instagram Logo: link to Chreat instagram page"/>
                    <img src={Twitter} alt="Twitter Logo: link to Chreat twitter page" />
                    <img src={LinkedIn} alt="LinkedIn: link to Chreat LinkedIn profile"/>
                    <img src={Discord} alt="Discord: link to Chreat discord channel"/>
                    <img src={Medium} alt="Medium: link to Chreat medium blog" />
                </div>
            </div>
            <p> © 2022 Creath. All Rights Reserved</p>
        </div>
    )
}

export default Footer