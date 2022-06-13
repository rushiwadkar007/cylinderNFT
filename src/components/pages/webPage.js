import React, {useState} from 'react'
import background from "../../assets/images/background.png"
import Banner from "../../assets/images/Banner-1.png"
import "./webPage.css"
import BannerParis from "../../assets/images/Banner-2.png"
import logo from "../../assets/images/Logo-white.png"
import { Link } from "react-router-dom"
import Wallet from './wallet'
import Home from './home'

function Webpage() {
  const [isConnected, setIsConnected] = useState(false);
  const onLogin = () =>{
    setIsConnected(true);
  }
  const onLogout = () =>{
    setIsConnected(false);
  }
  return (
    <div class="container">

      <img
        src={background}
        alt="background"
      />
      <div class="wallet">
         {!isConnected && <Wallet onLogin= {onLogin} onLogout={onLogout}/>}
         {isConnected && <Home/>}
      </div>
      <img
        src={logo}
        alt="banner-1"
        class="centered-logo"
        width="23%"
      />
      <img
        src={Banner}
        alt="banner-1"
        class="centered-banner"
        width="72%"
        height="45%"
      />
      <div class="left-text">Cylinder Eyes NFTs (also called “eyes”) are a unique digital collectible living on the  the blockchain. Your Cylinder</div>
      <div class="left-down">Eyes is the key through which you can buy Cylinder Eyes luxury goods.</div>
      <img
        src={BannerParis}
        alt="banner-1"
        class="centered-bannerParis"
        width="58%"
        height="8%"
      />
      <Link to="/all"><button type="button" class="btn">Enter</button></Link>
      <div></div>
      <div></div>
      {/* <div>
      <Link><button type="button" class="btn">Connect Wallet</button></Link>
      </div> */}

      <a href="https://twitter.com/Cylinder_Eyes" class="nav-item">
        <div class="icons">
          <i class="fa fa-twitter fa-2x"></i>
        </div>
      </a>
      <a href="https://www.instagram.com/cylindereyes/" class="nav-item">
        <div class="icon">
          <i class="fa fa-instagram fa-2x"></i>
        </div>
      </a>
      <a href="https://www.linkedin.com/company/cylinder-eyes/" class="nav-item">
        <div class="icon-1">
          <i class="fa fa-linkedin fa-2x"></i>
        </div>
      </a>
    </div>
  )
}

export default Webpage

