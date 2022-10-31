import React, { useRef } from 'react';
import Header from '../../Components/Header/header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Data from './arts'
import Golden from './golden.mp4'
import YoutubeEmbed from "../../Components/Youtube/youtube";
import Left from './left.svg'
import Right from './right.svg'
import Logo from './logo.png'
import './home.css'


const Home = ()=>{

    const settings = { 
        fade: true ,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slideToShow: 1,
        arrows: false
    }

    const sliderRef = useRef();

    const Using = Data.filter((data)=>{
        return !data.img.includes("mp4")
    })

    return(
        <div className="home_main">
            <Header/>
            <div className="main_hero_section">
                <div className="hero_text">
                    <h1>Where Digital Meets<br></br>Physical</h1>
                    <p>We are a curated marketplace<br></br>bridging the gap between creators<br></br>and collectors</p>
                    <button>Explore</button>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {
                        Using.map((card, index)=>{
                            return(
                                <div key={index} className="slide">
                                    {card.img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={card.img} type="video/mp4"/></video> : <img className="home_media" src={card.img} alt={card.title}/> }
                                    <div className="Text">
                                        <p className="art_name">{card.title}</p>
                                        <p className="artist_name">{card.artist}</p>
                                        <hr></hr>
                                    </div>
                                    <div className="price">
                                        <p>{card.price} USDC</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className="arrows">
                    <img src={Left} alt="arrow" onClick={()=>{sliderRef.current.slickPrev()}}/>
                    <img src={Right} alt="arrow" onClick={()=>{sliderRef.current.slickNext()}}/>
                </div>
            </div>

            <div className="about">
                <h1>About Creath</h1>
                <div className="home_youtube">
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                </div>
            </div>
            <div className='topNft'>
                <h1>Top NFTs</h1>
                <div className='top'>
                    <div className="nft">
                        {Using[0].img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={Using[0].img} type="video/mp4"/></video> : <img  src={Using[0].img} alt={Using[2].title}/> }
                        <div className="Text">
                            <p className="art_name">{Using[0].title}</p>
                            <p className="artist_name">{Using[0].artist}</p>
                            <hr></hr>
                        </div>
                        <div className="price">
                            <p>{Using[0].price} USDC</p>
                        </div>
                    </div>
                    <div className="nft">
                        {Using[1].img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={Using[1].img} type="video/mp4"/></video> : <img src={Using[1].img} alt={Using[1].title}/> }
                        <div className="Text">
                            <p className="art_name">{Using[1].title}</p>
                            <p className="artist_name">{Using[1].artist}</p>
                            <hr></hr>
                        </div>
                        <div className="price">
                            <p>{Using[1].price} USDC</p>
                        </div>
                    </div>
                    <div className="nft">
                        {Using[2].img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={Using[2].img} type="video/mp4"/></video> : <img src={Using[2].img} alt={Using[2].title}/> }
                        <div className="Text">
                            <p className="art_name">{Using[2].title}</p>
                            <p className="artist_name">{Using[2].artist}</p>
                            <hr></hr>
                        </div>
                        <div className="price">
                            <p>{Using[2].price} USDC</p>
                        </div>
                    </div>
                </div>
                <button>See More</button>
            </div>
            <div className='hotCollections'>
                <h1>Hot Collections</h1>
                <div className='hot'>
                    <div className="nft">
                        {Using[0].img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={Using[0].img} type="video/mp4"/></video> : <img  src={Using[0].img} alt={Using[2].title}/> }
                        <div className="Text">
                            <p className="art_name">{Using[0].title}</p>
                            <p className="artist_name">{Using[0].artist}</p>
                            <hr></hr>
                        </div>
                        <div className="price">
                            <p>{Using[0].price} USDC</p>
                        </div>
                    </div>
                    <div className="nft">
                        {Using[1].img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={Using[1].img} type="video/mp4"/></video> : <img src={Using[1].img} alt={Using[1].title}/> }
                        <div className="Text">
                            <p className="art_name">{Using[1].title}</p>
                            <p className="artist_name">{Using[1].artist}</p>
                            <hr></hr>
                        </div>
                        <div className="price">
                            <p>{Using[1].price} USDC</p>
                        </div>
                    </div>
                    <div className="nft">
                        {Using[2].img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={Using[2].img} type="video/mp4"/></video> : <img src={Using[2].img} alt={Using[2].title}/> }
                        <div className="Text">
                            <p className="art_name">{Using[2].title}</p>
                            <p className="artist_name">{Using[2].artist}</p>
                            <hr></hr>
                        </div>
                        <div className="price">
                            <p>{Using[2].price} USDC</p>
                        </div>
                    </div>
                </div>
                <button>See More</button>
            </div>
            <div className='partners'>
                <h1>Our Partners</h1>
                <div className='Logos'>
                    <img src={Logo} alt="Sponsor's Logo" />
                    <img src={Logo} alt="Sponsor's Logo" />
                    <img src={Logo} alt="Sponsor's Logo" />
                    <img src={Logo} alt="Sponsor's Logo" />
                    <img src={Logo} alt="Sponsor's Logo" />
                    <img src={Logo} alt="Sponsor's Logo" />
                </div>
            </div>
            <div className="goldenticket">
                <div className="goldenContent">
                    <div className="goldenText">
                        <h1>The Gold Ticket</h1>
                        <p>
                        The Golden Ticket is the official mint pass and your ticket<br></br>
                        to all future web3 projects of Creath including Whitelists<br></br>
                        for exclusive NFT drops, Artist releases, access to<br></br> 
                        exhibitions, real world events and in the metaverse .<br></br> 
                        Guaranteed access to our drops and exclusive access to<br></br>
                        our artists.
                        </p>
                        <button>Join Waitlist</button>
                    </div>
                    <video autoPlay={true} muted playsInline loop>
                        <source  src={Golden} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Home;