import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import Navbar from 'react-bootstrap/Navbar';


export default class Header extends React.Component {

render() {
  return (


  <div className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor: "#2e2e2e"}}>
    <div className="container">
      <a className="nav-link" href="http://facebook.com/rrgderby" target="_new">FB</a>
      <a className="nav-link" href="http://instagram.com/resurrectionrollerderby" target="_new">IG</a>
      <a className="nav-link" href="https://twitter.com/rrgderby" target="_new">TWT</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about/">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">Get Involved</Link>
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
      </div>
    </div>
  </div>
);
}}
