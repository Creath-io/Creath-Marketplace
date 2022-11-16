import React from 'react';
import Zoom from 'react-medium-image-zoom';
import { useNavigate } from 'react-router-dom';


const SlideCard = (props)=>{

    let navigate = useNavigate();

    const ArtProfile = {
        title : `${props.title}`,
        description : `${props.description}`,
        price : `${props.price}`,
        artist : `${props.artist}`,
        id : `${props.id}`,
        image : `${props.img}`,
        style: `${props.style}`
    }

    const showProduct =  ()=>{
        localStorage.setItem('Art', JSON.stringify(ArtProfile))
        props.setProduct(ArtProfile)
        navigate(`/product/${props.id}`)
    }

    // const showArtist =  ()=>{
    //     props.setArtist(props.artist)
    //     navigate(`/artist`)
    // }

    return(
        <div className="slide">
            {props.img.includes('mp4') ?<video autoPlay muted playsInline className="home_media" ><source src={props.img} type="video/mp4"/></video> : <Zoom><img className="home_media" src={props.img} alt={props.title}/></Zoom> }
            <div className="Text">
                <p className="art_name" onClick={() => showProduct()}>{props.title}</p>
                <p className="artist_name">{props.artist}</p>
                <hr></hr>
            </div>
            <div className="price">
                <p>{props.price} USDC</p>
            </div>
        </div>
    )
}

export default SlideCard;
