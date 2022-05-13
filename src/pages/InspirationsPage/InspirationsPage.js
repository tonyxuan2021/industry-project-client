import React, { Component } from "react";
import Navbar from "../../component/Navbar/Navbar";
import magnifier from "../../assets/akar-icons_search.png";
import img_1 from "../../assets/Rectangle 60.png";
import avatar_2 from "../../assets/Ellipse 2.png";
import heart from "../../assets/bi_suit-heart.png";
import eye from "../../assets/Group.png";
import "./InspirationsPage.scss";

class InspirationsPage extends Component {
  render() {
    return (
      <div className="insp__wrapper">
        <Navbar />
        <div className="inspiration__wrapper">
          <p className="inspiration__text font-black">Popular</p>
          <div className="tag__wrapper">
            <img src={magnifier} className="mag"></img>
            <p className="inspiration__text">Images</p>
          </div>
          <div className="tag__wrapper">
            <img src={magnifier} className="mag"></img>
            <p className="inspiration__text">Video</p>
          </div>
          <div className="tag__wrapper">
            <img src={magnifier} className="mag"></img>
            <p className="inspiration__text">Music</p>
          </div>
        </div>
        <h1 className="insp__title">Check out some of today's inspiration</h1>
        <div className="card__wrapper">
          <div className="card__individual__wrapper">
            <img src={img_1} className="card__img"></img>
            <div className="card--btm__wrapper">
              <div className="card--left">
                <img src={avatar_2} className="img--btn__1"></img>
                <p>Jacob Foster</p>
              </div>
              <div className="card--right">
                <div className="heart__wrapper">
                  <img src={heart} className="img--btn__2"></img>
                  <p>0</p>
                </div>
                <div className="eye__wrapper">
                  <img src={eye} className="img--btn__3"></img>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InspirationsPage;
