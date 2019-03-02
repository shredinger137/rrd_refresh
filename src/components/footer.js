import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import Navbar from 'react-bootstrap/Navbar';


export default class Footer extends React.Component {

render() {
  return (
    <div id="contact" className="bg-dark ">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mx-auto text-center">
            <h2 className="section-heading text-main mt-2">Contact Us</h2>
            <hr className="my-3"></hr>
            <p className="mb-4 text-main">Have questions? Just like to chat? Send us an email. We'll be happy to talk.<br /><br /></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mr-auto text-center text-main">
            <i className="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
            <p>
              <a href="mailto:your-email@your-domain.com">info@rrgderby.org</a>
            </p>
          </div>
      <div className="col-lg-4 mr-auto text-center">
        <form action="https://resurrectionrollergirls.us17.list-manage.com/subscribe/post?u=9fd9953ee9186ce0be5282bc1&amp;id=b458913c77" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <h5 className="text-main">Subscribe to our mailing list!<br /></h5>
          <label for="mce-EMAIL" className="text-main text-left">Enter Email Address </label>
          <input type="email" name="EMAIL" id="mce-EMAIL" />
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{display: "None"}}></div>
            <div className="response" id="mce-success-response" style={{display: "None"}}></div>
          </div>
          {/* Dummy input for filthy botses; filling it in cancels submission */}
          <div style={{position: "absolute", left: "-5000px", ariaHidden: "True"}}>
            <input type="text" name="b_9fd9953ee9186ce0be5282bc1_b458913c77" tabindex="-1" value="" /></div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
          </form>
        </div>
          <div className="col-lg-4 mr-auto text-center">
            <p className="text-main">Members: <a href="payments.html">Pay Dues</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mr-auto text-center pt-2">
            <p className="text-main">Proud members of the <a href="http://wftda.com" target="_new">Women's Flat Track Roller Derby Association</a>. RRG is a 501c(3) nonprofit in the state of California.</p>
          </div>
        </div>
      </div>
    </div>


);
}}
