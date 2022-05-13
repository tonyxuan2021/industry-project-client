import React, { Component } from "react";
import logo from "../../assets/shutterstock-logo-pos 1.png";
import downArrow from "../../assets/ic_round-arrow-back-ios-new.png";
import heart from "../../assets/bi_suit-heart.png";
import avatar_2 from "../../assets/Ellipse 2.png";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Group 17.png";
import "./Navbar.scss";
import "../Modal/Modal.scss";

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
        <button className="radius background" onClick={this.toggleModal}>
          Submit a photo
        </button>
        <div className="link__wrapper">
          <p>Pricing</p>
          <img src={downArrow} className="downArrow"></img>
        </div>
        <img src={heart} className="nav__img"></img>
        <img src={avatar_2} className="nav__img"></img>
        <div>
          {/* <button onClick={this.toggleModal} className="btn-modal">
            Open
          </button> */}
          {this.state.modal && (
            <div className="modal">
              <div onClick={this.toggleModal} className="overlay"></div>
              <div className="modal-content">
                <div className="modal__wrapper">
                  <h1>Upload Your Content</h1>
                  <div className="name__wrapper">
                    <img src={avatar_2}></img>
                    <p>Jacob Foster</p>
                  </div>
                </div>
                <div className="modal__inner__wrapper">
                  <p className="margin__fix">Drag and drop your files here or</p>
                  <p className="margin__fix">Select Multiple Files</p>
                  <img src={imgLogo} className="modal__img"></img>
                  <p className="margin__fix">
                    Images must by in .eps or .jpg format. Videos must be .mov
                    or .Mp4 format.
                  </p>
                  <p className="margin__fix">More image and video requirements</p>
                </div>

                {/* <p>Congradulations! Your comment is now posted!</p> */}
                <button className="close-modal" onClick={this.toggleModal}>
                  Cancel
                </button>
                <button className="submit-modal">Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
