import React from 'react'
import Logo from "../../assets/images/Logo.png"
import background from "../../assets/images/background.png"
import first from "../../assets/images/0.png"
import second from "../../assets/images/1.png"
import third from "../../assets/images/3.png"
import forth from "../../assets/images/6.png"
import fifth from "../../assets/images/2.png"
import sixth from "../../assets/images/5.png"
import gif from "../../assets/images/gif.gif"
import { Link } from "react-router-dom"
import { Login, account, contract } from './wallet'
import "./minting.css"


function minting(props) {
  console.log("minting page  ", contract);
  const mint = () =>{
    // var _mintAmount = Number(document.querySelector("[name=amount]").value); 
        let price = 10 ** 18;
      contract.methods.mintCylinder(1,0, String(price)).send({ from: account }); 
  }
  return (
    <div class="">
      <div>
        <Link to="/"><img
          src={Logo}
          alt="banner-1"
          class="logo-minting"
          width="17%"
        /></Link>
      </div>
      <br />
      <br />
      <div class="container-minting">
        <img
          src={background}
          alt="background"
          width="130%"
        />
        <h1 class="minting-nft">&nbsp;CONGRATS YOU ARE GOING TO BUY A
          CYLINDER EYES! ENJOY THE PRIVILAGES.
        </h1>
        <img
          src={first}
          alt="nft-minting"
          class="first-mint"
          width="12%"
        />
        <img
          src={second}
          alt="nft-minting"
          class="second-mint"
          width="12%"
        />
        <img
          src={third}
          alt="nft-minting"
          class="third-mint"
          width="12%"
        />
        <img
          src={forth}
          alt="nft-minting"
          class="forth-mint"
          width="12%"
        />
        <img
          src={fifth}
          alt="nft-minting"
          class="fifth-mint"
          width="12%"
        />
        <img
          src={sixth}
          alt="nft-minting"
          class="sixth-mint"
          width="12%"
        />
        <Link><button type="button" class="btn-mint" onClick={mint}>MINT NFT</button></Link>
        <img
          src={gif}
          alt="nft-gif"
          class="nft-gif"
          width="22%"
        />
         <img
          src={first}
          alt="nft-gif"
          class="nft-first"
          width="22%"
        />
        <h1 class="nft-minted">NFT SUCCESSFULLY MINTED</h1>
        <a href="https://twitter.com/Cylinder_Eyes" class="nav-item">
          <div class="mint-icons">
            <i class="fa fa-twitter fa-2x"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/cylindereyes/" class="nav-item">
          <div class="mint-icon">
            <i class="fa fa-instagram fa-2x"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/cylinder-eyes/" class="nav-item">
          <div class="mint-icon1">
            <i class="fa fa-linkedin fa-2x"></i>
          </div>
        </a>
      </div>
    </div>
  )
}

export default minting