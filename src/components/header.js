import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


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
            <a className="nav-link js-scroll-trigger" href="./index.html#schedule">Events</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about/">About</Link>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="./index.html#join">Get Involved</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./sponsors.html">Sponsors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="juniors.html">Juniors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
}}
