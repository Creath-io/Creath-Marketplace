import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './header.css'
import Logo from './creat-logo.png'
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    const [errorMessage, setErrorMessage] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
  
    useEffect(() => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", accountsChanged);
        window.ethereum.on("chainChanged", chainChanged);
      }
    }, []);
  
    const connectHandler = async () => {
      if (window.ethereum) {
        try {
          const res = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          await accountsChanged(res[0]);
        } catch (err) {
          console.error(err);
          setErrorMessage("There was a problem connecting to MetaMask");
        }
      } else {
        setErrorMessage("Install MetaMask");
      }
    };
  
    const accountsChanged = async (newAccount) => {
      setAccount(newAccount);
      try {
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [newAccount.toString(), "latest"],
        });
        setBalance(ethers.utils.formatEther(balance));
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    };
  
    const chainChanged = () => {
      setErrorMessage(null);
      setAccount(null);
      setBalance(null);
    };


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
                <button className='Login' onClick={connectHandler}>Login</button>
            </div>
        </div>
    )
}

export default Header