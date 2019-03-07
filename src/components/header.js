import React from 'react';
import { Link } from 'gatsby';
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


class Header extends React.Component {
  menuToggleClick = () => {
    document.body.classList.toggle('open');
  };

  menuHideClick = () => {
    document.body.classList.remove('open');
  };

  render() {
    return (
      <header className="header">
        <div class="row">
          <div className="social">
            <a href="http://facebook.com/rrgderby" target="_new">
              <img src={require('../img/facebook.png')} className="social-icon"/>
            </a>
            <a href="http://instagram.com/resurrectionrollerderby" target="_new">
              <img src={require('../img/instagram.png')} className="social-icon" />
            </a>
            <a href="https://twitter.com/rrgderby" target="_new">
              <img src={require('../img/twitter.png')} className="social-icon" />
            </a>
          </div>


              <nav className="header-nav-wrap">
            <ul className="header-main-nav" onClick={() => this.menuHideClick()}>
              <li >
                <Link className="menu-text" to="/#schedule">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="menu-text" to="/about/">About</Link>
              </li>

              <li className="nav-item">
                <Link className="menu-text" to="/#join">Get Involved</Link>
              </li>
              <li className="nav-item">
                <Link className="menu-text" to="/sponsors/">Sponsors</Link>
              </li>
              <li className="nav-item">
                <Link className="menu-text" to="/juniors/">Juniors</Link>
              </li>
              <li className="nav-item">
                <Link className="menu-text" to="/">Contact</Link>
              </li>
              <li className="nav-item">
                <a href="https://www.brownpapertickets.com/" target="_blank"
                  className="menu-text">
                  Buy Tickets
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="header-menu-toggle"
            onClick={() => this.menuToggleClick()}>
            <span>Menu</span>
          </button>
          </div>
      </header>
    );
  }
}

export default Header;
