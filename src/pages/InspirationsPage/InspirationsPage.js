import React, { Component } from "react";
import Navbar from "../../component/Navbar/Navbar";
import magnifier from "../../assets/akar-icons_search.png";
import heart from "../../assets/bi_suit-heart.png";
import eye from "../../assets/Group.png";
import "./InspirationsPage.scss";
import axios from "axios";

class InspirationsPage extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/inspiration/`).then((response) => {
      const imageResults = response.data;
      console.log(imageResults);
      this.setState({ images: imageResults });
    });
  }

  render() {
    if (this.state.images.length === 0) {
      return (
        <section>
          <p>... Loading your post data ...</p>
        </section>
      );
    }

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
          {this.state.images.map((image) => {
            return (
              <div className="card__individual__wrapper" key={image.id}>
                <img src={image.image} className="card__img"></img>
                <div className="card--btm__wrapper">
                  <div className="card--left">
                    <img src={image.avatar} className="img--btn__1"></img>
                    <p>{image.name}</p>
                  </div>
                  <div className="card--right">
                    <div className="heart__wrapper">
                      <img src={heart} className="img--btn__2"></img>
                      <p>{image.likes}</p>
                    </div>
                    <div className="eye__wrapper">
                      <img src={eye} className="img--btn__3"></img>
                      <p>{image.views}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default InspirationsPage;
