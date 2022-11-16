import React, { useEffect, useState } from 'react';
import './product.css';
import Header from '../../Components/Header/header';
import Zoom from 'react-medium-image-zoom';
import Picture from './physical_copy.png';
import Share from './share.png';
import Report from './report.png';
import Activity from '../../Components/Activity/activity';
import Footer from '../../Components/Footer/footer';



const Product = ({product})=>{
    const [Arts, setArts] = useState('');

    useEffect(()=>{
        setArts(JSON.parse(localStorage.getItem("Art")))
        const url = window.location.pathname;
        const array1 = url.split("/")
        console.log(array1[2])
    },[])

    const media = String(Arts.image);
    

    return(
        <div className='productMain'>
            <Header/>
            <div className='product_info'>
                {
                    media.includes("mp4") ?
                    <video autoPlay={true} muted={true} loop >
                        <source src={Arts.image} type="video/mp4"></source>
                    </video>
                    :
                    <Zoom><img src={Arts.image} alt="Artwork"/></Zoom>
                }
                <div className='product_text'>
                    <h1>{Arts.title}</h1>
                    <p className='product_artist'>Created by: {Arts.artist}</p>
                    <p className='product_price'>{Arts.price} USDC</p>
                    <div className='physical_copy'>
                        <img src={Picture} alt="Physical copy"/>
                        <p>Physical Copy Unavailable</p>
                    </div> 
                    <button>Make Offer</button>
                    <div className='product_action'>
                        <div className='product_share'>
                            <img src={Share} alt="Share the product"/>
                            <p>Share</p>
                        </div>
                        <div className='product_report'>
                            <img src={Report} alt="Report the product"/>
                            <p>Report</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_description'>
                <div className='prod_desc_text'>
                    <h1>Description</h1>
                    <p>{Arts.description}</p>
                </div>  
                <div className='prod_desc_info'>
                    <div className='items'>
                        <p className='prop'>Medium</p>
                        <p>{Arts.style}</p>
                    </div>
                    <div className='items'>
                        <p className='prop'>Location</p>
                        <p>Sweden</p>
                    </div>
                    <div className='items'>
                        <p className='prop'>Token ID</p>
                        <p>5890885316476......</p>
                    </div>
                    <div className='items'>
                        <p className='prop'>Dimension</p>
                        <p>400x400</p>
                    </div>
                    <div className='items'>
                        <p className='prop'>Weight</p>
                        <p>500G</p>
                    </div>
                </div>

            </div>
            <div className='product_activities'>
                <h1>Activity and History</h1>
                <div className='act_header'>
                    <p>Event</p>
                    <p>Price</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Date</p>
                    <p>Time</p>
                </div>
                <div className='activities'>
                    <Activity event="Buy" price="23,000" from="John Doe" to={Arts.artist} date="22/02/22" time="02:02:22"/>
                    <Activity event="Minted" price="" from="John Doe" to="" date="22/02/22" time="02:02:22"/>
                    <Activity event="Transfer" price="" from="John Doe" to={Arts.artist} date="22/02/22" time="02:02:22"/>
                    <Activity event="Buy" price="23,000" from="John Doe" to={Arts.artist} date="22/02/22" time="02:02:22"/>
                    <Activity event="Minted" price="" from="John Doe" to="" date="22/02/22" time="02:02:22"/>
                    <Activity event="Transfer" price="" from="John Doe" to={Arts.artist} date="22/02/22" time="02:02:22"/>
                </div>
            </div>
            <div className='prodFooter'>
                <Footer/>
            </div>
        </div>
    )
}

export default Product
