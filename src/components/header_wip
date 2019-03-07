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
        <div class="row">
          <nav className="header-nav-wrap">
            <ul className="header-main-nav" onClick={() => this.menuHideClick()}>
              <li className="nav-item">
                <Link className="nav-link" to="/#schedule">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#join">Get Involved</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./sponsors/">Sponsors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/juniors/">Juniors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
              </li>
            </ul>

            <a href="https://www.brownpapertickets.com/event/4044964" target="_blank" rel="noopener noreferrer"
              className="button button-primary cta">
              Buy Tickets
            </a>
          </nav>

          <button
            className="header-menu-toggle"
            onClick={() => this.menuToggleClick()}>
            <span>Menu</span>
          </button>
        </div>
    );
  }
}

export default Header;
