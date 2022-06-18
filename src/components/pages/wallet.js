import React from 'react'
import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider'
import {ABI,ADDRESS} from '../../contractDetails/cylinder.json';
import WalletLink from 'walletlink'
import './wallet.css'

let account = null;
const providerOptions = {
    binancechainwallet:{
      package:true
    },
    walletconnect:{
      package: WalletConnectProvider,
      options:{
        infuraId: "66eeaa8fd42d410981e1ee55b10bc857"
      }
    },
    walletlink:{
      package:WalletLink,
      options:{
        appName: "Cylinder NFT",
        infuraId: "66eeaa8fd42d410981e1ee55b10bc857",
        rpc: "",
        chainId: 4,
        appLogoUrl: null,
        darkMode: false
  
      }
    }
  }
  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "dark",
    cacheProvider: false,
    providerOptions
  
  })
  function Login(props) {
    const detectProvider = () => {
      let provider = web3Modal.connect();
      return provider;
    }
    const onLoginHandler = async () => {
    //   const provider = detectProvider();
    var provider = await web3Modal.connect();
    var web3 = new Web3(provider); 
    await window.ethereum.send('eth_requestAccounts'); 
    var accounts = await web3.eth.getAccounts(); 
    account = accounts[0]; 
    console.log(account);
    // document.getElementById('wallet-address').textContent = account;
    var contract = new web3.eth.Contract(ABI, ADDRESS);
    console.log(contract);
    props.onLogin();
    
    }
    return (
        <button onClick={onLoginHandler} type="button" class="btn1">Connect Wallet</button>
    )
  }
export {Login, account}