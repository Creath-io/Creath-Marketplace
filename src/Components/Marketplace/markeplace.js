import React, { useEffect, useState } from 'react';
import Data from '../../Containers/Home/arts';
import ArtCard from '../ArtCard/artcard';
import Select from 'react-select';
import Slider from '@mui/material/Slider';
import './marketplace.css'

const Marketplace = ( { setProduct, setArtist} )=>{
    const [arts, setArts] = useState('',{});
    const [works, setWorks] = useState(Data,{})
    const [dropdown, setDropdown] = useState('art',{})
    const [value, setValue] = useState([0, 1000]);
    const options1 = [
        { value: 'art', label: 'Art' },
        { value: 'artist', label: 'Artist' },
        { value: 'style', label: 'Style' }
    ]

    useEffect(()=>{
        setArts(works.map((user,i)=>{
            return(
                <ArtCard key={i} id={works[i].id} img={works[i].img} title={works[i].title} description={works[i].description} artist={works[i].artist} price={works[i].price} style={works[i].style} setProduct = {setProduct} setArtist = {setArtist}/>
            )
        }))
    }, [works,setProduct,setArtist])

    const searchChange = (event)=>{
        if(dropdown === 'art'){
            setWorks(Data.filter((arr)=>{
                return arr.title.toLowerCase().includes(event.target.value.toLowerCase())
            }))
        }

        if(dropdown === 'artist'){
            setWorks(Data.filter((arr)=>{
                return arr.artist.toLowerCase().includes(event.target.value.toLowerCase())
            }))
        }

        if(dropdown === 'style'){
            setWorks(Data.filter((arr)=>{
                return arr.style.toLowerCase().includes(event.target.value.toLowerCase())
            }))
        }

    }
    
    const dropdownChange = (option)=>{
        setDropdown(option.value);
    }

    const rangeChange = (event,newValue)=>{
        setValue(newValue);
        console.log(newValue)
        setWorks(Data.filter((arr)=>{
            return arr.price >= newValue[0] && arr.price <= newValue[1]
        }))
    }

    return(
        <div className='MarketMains'>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                min = {0}
                max={1000}
                value={value}
                step={1}
                onChange={rangeChange}
                valueLabelDisplay="auto"
            />
            <div className='MarketSearch'>
                <input placeholder="Search...." className="MarketSearchInput" onChange={searchChange}></input>
                <Select options={options1} onChange={dropdownChange} />
            </div>
            <div className='MarketMain'>
                {arts}
            </div>
        </div>
    )
}

export default Marketplace;