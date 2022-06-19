import React from 'react'
import Logo from "../../assets/images/Logo.png"
import background from "../../assets/images/background.png"
import nft from "../../assets/images/nft-marketing.png"
import first from "../../assets/images/0.png"
import second from "../../assets/images/1.png"
import third from "../../assets/images/3.png"
import forth from "../../assets/images/6.png"
import banner from "../../assets/images/Website-Banner.png"
import { Link } from "react-router-dom"
import Footer from "./footer"
import "./aboutAll.css"
import { Login, account, contract } from './wallet'

function aboutAll() {

  const buyNFT = () =>{
    // var _mintAmount = Number(document.querySelector("[name=amount]").value); 
        
      contract.methods.transferPayment("0x568D136a5cfFE6b148a61770f5835fA32927d987", 0).send({ from: account, value: String(1 * (10**18)) }); 
  }
  return (
    <div class="">
      <div>
        <Link to="/"><img
          src={Logo}
          alt="banner-1"
          class="logo-all"
          width="17%"
        /></Link>
      </div>
      <br />
      <br />
      <div class="container-all">
        <img
          src={background}
          alt="background"
          width="300%"
          height="200%"
        />
        <h1 class="about">ABOUT</h1>
        <img
          src={nft}
          alt="nft-marketing"
          class="nft-logo"
          width="23%"
        />
        <div class="text-all">
          Modern Luxury goods access only through NFTs<br />
          <br />

          Cylinder Eyes is a collection of 10000 NFTs(also<br />
          called “eyes”) and is a unique digital collectible<br />
          living on the blockchain.Your Cylinder Eyes is the<br />
          key through which you can buy Cylinder Eyes<br />
          luxury goods.
        </div>
        <h1 class="our">OUR NFTS</h1>
        <img
          src={first}
          alt="nft-marketing"
          class="first"
          width="18%"
        />
        <img
          src={second}
          alt="nft-marketing"
          class="second"
          width="18%"
        />
        <img
          src={third}
          alt="nft-marketing"
          class="third"
          width="18%"
        />
        <img
          src={forth}
          alt="nft-marketing"
          class="forth"
          width="18%"
        />
        <Link to="/minting"><button type="button" class="btn-minting" onClick={buyNFT}>BUY NFT</button></Link>
        <h1 class="buy-nft">HOW TO BUY CYLINDER EYES NFT</h1>
        <div class="buy-list">
          <ul>
            <li>
              Visit www.cylindereyes.com and enter the website
            </li>
            <li>
              Click on Buy NFT
            </li>
            <li>
              Mint the NFT
            </li>
            <li>
              Purchase the NFT with your favorite crypto wallet
            </li>
          </ul>
        </div>
        <h1 class="buy-goods">HOW TO BUY LUXURY GOODS</h1>
        <div class="goods-list">
          <ul>
            <li>
              Buy Cylinder Eyes NFT
            </li>
            <li>
              Hold for minimum of 3 months
            </li>
            <li>
              You are eligible for the luxury goods purchase
            </li>
            <li>
              Visit www.cylindereyes.com/shop to buy the goods
            </li>
          </ul>
        </div>
        <h1 class="roadmap">ROADMAP</h1>
        <img
          src={banner}
          alt="nft-marketing"
          class="banner"
          width="70%"
        />
        <Link to="/minting"><button type="button" class="btn-minting2">BUY NFT</button></Link>
        <a href="https://twitter.com/Cylinder_Eyes" class="nav-item">
          <div class="all-icons">
            <i class="fa fa-twitter fa-2x"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/cylindereyes/" class="nav-item">
          <div class="all-icon">
            <i class="fa fa-instagram fa-2x"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/cylinder-eyes/" class="nav-item">
          <div class="all-icon1">
            <i class="fa fa-linkedin fa-2x"></i>
          </div>
        </a>
        <Footer/>
      </div>
    </div>
  )
}

export default aboutAll