import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
//Image Logo
import logo from "../../images/sFly/banner.png";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isOpenModal: false,
      page: false,
      landing: false,
      docs: false,
      new: false,
      utility: false,
      user: false,
      work: false,
      blog: false,
      carr: false
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  activateParentDropdown = item => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <div>
              <Link className="logo" to="/index">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ height: 40, width: 40 }}
                  />
                  <span style={{ paddingLeft: 10 }}>SFLY</span>
                </div>
              </Link>
            </div>

            <div className="buy-button">
              <div className="watch-video ">
                <Link
                  onClick={() => this.setState({ isOpenModal: true })}
                  to="#"
                  className="video-play-icon watch text-dark"
                >
                  <i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i>{" "}
                  WATCH VIDEO
                </Link>
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpenModal}
                  videoId="L61p2uyiMSo"
                  onClose={() => this.setState({ isOpenModal: false })}
                />
              </div>
            </div>
          
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
