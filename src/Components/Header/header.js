import React from 'react';
import './header.css'
import Logo from './creat-logo.png'
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    let navigate = useNavigate();

    const changePage = (page)=>{
        navigate(page)
    }

    return(
        <div className="Header">
            <div className='image'>
                <img src={Logo} alt="Creath Logo: Creativity x Innovation"/>
            </div>
            <div className='menu'>
                <p onClick={()=>{changePage('/')}}>Home</p>
                <p onClick={()=>{changePage('/marketplace')}}>Marketplace</p>
                <p onClick={()=>{changePage('/exhibition')}}>Exhibitions</p>
            </div>
            <div className='buttons'>
                <button className='SignUp'>Sign Up</button>
                <button className='Login'>Login</button>
            </div>
        </div>
    )
}

export default Header