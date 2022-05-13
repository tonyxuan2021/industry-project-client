import "./Modal.scss";

import React, { Component } from "react";

class Modal extends Component {
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
      <div>
        <button onClick={this.toggleModal} className="btn-modal">
          Open
        </button>
        {this.state.modal && (
          <div className="modal">
            <div onClick={this.toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>Congradulations! Your comment is now posted!</p>
              <button className="close-modal" onClick={this.toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
