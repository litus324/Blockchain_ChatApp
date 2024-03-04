import React,{useEffect, useContext, useState, isValidElement} from "react";
import Image from "next/image";
import Link from "next/link";

// Internal Import
import Style from'./NavBar.module.css'
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";
import { useStyleRegistry } from "styled-jsx";

const NavBar = () => {
  const menuItems =[
    {
     menu:"All User",
     link: "alluser",
    },
    {
      menu:"CHAT",
      link: "/",
     },
     {
      menu:"SETTING",
      link: "/",
     },
     {
      menu:"CONTACT",
      link: "/ ",
     },
     {
      menu:"FAQS",
      link: "/",
     },
     {
      menu:"TEMP OF USE",
      link: "/",
     }
  ]
  //Use state
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const {account, userName, connectWallet} = useContext(ChatAppContext)
  return (
  <div className={Style.NarBar}>
    <div className={Style.NarBar_box}>    
    <div className={Style.NarBar_box_left} >
      <Image src={images.logo} alt="logo" width={50} height ={50}/> 
    </div>
    <div className={Style.NarBar_box_right} >
      {/* DESKTOP */}
      <div className={Style.NarBar_box_right_menu} >
        {menuItems.map((el, i) =>(
          <div 
          onClick={()=> setActive(i + 1)} 
          key = { 1 + 1 } 
          className ={`${Style.NarBar_box_right_menu_items} ${active == i + 1 ? Style.active_btn :""}`}
          >
            <Link className={Style.NarBar_box_right_menu_items_link }
            href={el.link}
            >
               {el.menu}
            </Link>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      {open && (
        <div className={Style.mobile_menu} >
        {menuItems.map((el, i) =>(
          <div 
          onClick={()=> setActive(i + 1)} 
          key = { 1 + 1 } 
          className ={`${Style.mobile_menu_items} ${active == i + 1 ? Style.active_btn :""}`}
          >
            <Link className={Style.mobile_menu_items_link }
            href={el.link}
            >
               {el.menu}
            </Link>
          </div>
        ))}
        <p className={Style.mobile_menu.btn}>
          <Image 
          src={images.close}
          alt="close"
          width={50}
          height={50}
          onClick={() => setOpen(false)}
          />
        </p>
      </div>
      )}

      {/* CONNECT WALLET */}
      <div className={Style.NarBar_box_right_connect}>
        {account == "" ?(
          <button onClick={()=> connectWallet()}>
            {""}
            <span>Connect Wallet</span>
          </button>
        ) : (
          <button onClick={()=> setOpenModel(true)}>
            {''}
            <Image 
            src = {userName ? images.accountName : images.create2}
            alt="Account image"
            width = {20}
            hight = {20}
            />
            {''}
            <small>{userName || "Create Account"}</small>
          </button>
        )}
      </div>

      <div 
        className={Style.NarBar_box_right_open}
        onClick={() => setOpen(true)}
      >
        <Image src ={images.open} alt="open" width={30} height={30} />
      </div>
     </div>
    </div>
  </div>
    )
};

export default NavBar;
