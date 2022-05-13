import React from 'react'
import logo from "../../assets/shutterstock-logo-pos 1.png";
import downArrow from "../../assets/ic_round-arrow-back-ios-new.png";
import heart from "../../assets/bi_suit-heart.png"
import avatar_2 from "../../assets/Ellipse 2.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='nav__wrapper'>
    <img src={logo} className="logo"></img>
    <div className='link__wrapper'>
      <p>INSPIRATIONS</p>
      <img src={downArrow} className="downArrow"></img>
    </div>
    <div className='link__wrapper'>
      <p>IMAGES</p>
      <img src={downArrow} className="downArrow"></img>
    </div>
    <div className='link__wrapper'>
      <p>VIDEO</p>
      <img src={downArrow} className="downArrow"></img>
    </div>
    <div className='link__wrapper'>
      <p>MISIC</p>
      <img src={downArrow} className="downArrow"></img>
    </div>
    <div className='link__wrapper'>
      <p>TEMPLATES</p>
      <img src={downArrow} className="downArrow"></img>
    </div>
    <div className='link__wrapper'>
      <p>EDITORIAL</p>
      <img src={downArrow} className="downArrow border"></img>
    </div>
    <p>ENTERPRISE</p>
    <p className='radius'>Get $50</p>
    <p className='radius background'>Submit a photo</p>
    <div className='link__wrapper'>
      <p>Pricing</p>
      <img src={downArrow} className="downArrow"></img>
    </div>
    <img src={heart} className="nav__img"></img>
    <img src={avatar_2} className="nav__img"></img>
    </div>
  )
}

export default Navbar