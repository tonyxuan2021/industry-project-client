import React, { Component } from "react";
import logo from "../../assets/shutterstock-logo-pos 1.png";
import downArrow from "../../assets/ic_round-arrow-back-ios-new.png";
import heart from "../../assets/bi_suit-heart.png";
import avatar_1 from "../../assets/Ellipse 1.png";
import avatar_2 from "../../assets/Ellipse 2.png";
import { Link } from "react-router-dom";
import photo_1 from "../../assets/img1.png";
import imgLogo from "../../assets/Group 17.png";
import "./Navbar.scss";
import "../Modal/Modal.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

// const history = useHistory();

class Navbar extends Component {
  state = {
    modal: false,
  };

  toggleModal = () => {
    // this.setState({
    //   modal: true,
    // });
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    this.setState({ modal: !this.state.modal });
    this.props.handleSubmitPhoto();
  };

  handleClick = () => {
    this.toggleModal();
    // this.handleSubmit();
  };

  render() {
    return (
      <div className="nav__wrapper">
        <Link to={"/"}>
          <img src={logo} className="logo"></img>
        </Link>
        <Link to={"/inspirations"} className="link__wrapper">
          <p>INSPIRATIONS</p>
          <img src={downArrow} className="downArrow"></img>
        </Link>
        <div className="link__wrapper">
          <p>IMAGES</p>
          <img src={downArrow} className="downArrow"></img>
        </div>
        <div className="link__wrapper">
          <p>VIDEO</p>
          <img src={downArrow} className="downArrow"></img>
        </div>
        <div className="link__wrapper">
          <p>MISIC</p>
          <img src={downArrow} className="downArrow"></img>
        </div>
        <div className="link__wrapper">
          <p>TEMPLATES</p>
          <img src={downArrow} className="downArrow"></img>
        </div>
        <div className="link__wrapper">
          <p>EDITORIAL</p>
          <img src={downArrow} className="downArrow border"></img>
        </div>
        <p>ENTERPRISE</p>
        <p className="radius">Get $50</p>
        <button
          type="submit"
          className="radius background"
          onClick={this.handleClick}
        >
          Submit a photo
        </button>
        <div className="link__wrapper">
          <p>Pricing</p>
          <img src={downArrow} className="downArrow"></img>
        </div>
        <img src={heart} className="nav__img"></img>
        <img src={avatar_1} className="nav__img"></img>
        <div>
          {/* <button onClick={this.toggleModal} className="btn-modal">
            Open
          </button> */}
          {this.state.modal && (
            <div className="modal">
              <div onClick={this.toggleModal} className="overlay"></div>
              <form className="modal-content" onSubmit={this.handleSubmit}>
                <div className="modal__wrapper">
                  <h1>Upload Your Content</h1>
                  <div className="name__wrapper">
                    <img src={avatar_1} className="avatar__nav__img"></img>
                    <p>Sarah Scout</p>
                  </div>
                </div>
                <div className="modal__inner__wrapper">
                  <p className="margin__fix">
                    Drag and drop your files here or
                  </p>
                  <p className="margin__fix">Select Multiple Files</p>
                  <div className="img__wrapper">
                    <img src={photo_1} className="modal__img modal__img--2"></img>
                    <img src={imgLogo} className="modal__img"></img>
                  </div>
                  <p className="margin__fix">
                    Images must by in .eps or .jpg format. Videos must be .mov
                    or .Mp4 format.
                  </p>
                  <p className="margin__fix">
                    More image and video requirements
                  </p>
                  <button className="btn__browse">Browse</button>
                </div>

                {/* <p>Congradulations! Your comment is now posted!</p> */}
                <button className="close-modal" onClick={this.toggleModal}>
                  Cancel
                </button>
                <button className="submit-modal">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
