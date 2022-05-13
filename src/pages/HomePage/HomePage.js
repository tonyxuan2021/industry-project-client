import React, { Component } from "react";
import Navbar from "../../component/Navbar/Navbar";
import './HomePage.scss';
import searchIcon from '../../assets/heroSearch.png';
import searchBoxLeft from '../../assets/searchBox.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="hero">
          <div className="hero__title">
            <h1 className="hero__title--header">One library, millions of ways to tell your story</h1>
            <p className="hero__title--text">Unleash your creativity with 400M+ images, videos, and music tracks.</p>
            <form className="hero__title--form"> 
            <img className="hero__title--icon-left" src={searchBoxLeft} alt="searchBar Icon"></img>        
              <input className="hero__title--form-input" type="search" id="query" name="searchBar" placeholder="Search for images"/>
              <img className="hero__form--icon" src={searchIcon} alt="searchBar Icon"></img>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
