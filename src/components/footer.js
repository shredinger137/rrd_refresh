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
            <hr className="my-3" />
            <p className="mb-4 text-main">Have questions? Just like to chat? Send us an email. We'll be happy to talk.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mr-auto text-center text-main">
            <p>Put like a thing here</p>
            <p>
              <a href="mailto:your-email@your-domain.com">info@rrgderby.org</a>
            </p>
          </div>
      <div className="col-lg-4 mr-auto text-center">
                //MailChimp signup

                        <div id="mc_embed_signup" className="bg-dark">
                        <form action="https://resurrectionrollergirls.us17.list-manage.com/subscribe/post?u=9fd9953ee9186ce0be5282bc1&amp;id=b458913c77" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                          <div id="mc_embed_signup_scroll">
                          <h5 className="text-main">Subscribe to our mailing list!</h5>
                        <div className="container">
                          <label for="mce-EMAIL" className="text-main text-left">Email Address </label>
                          <input type="email" value="" name="EMAIL" id="mce-EMAIL" />
                        </div>
                          <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                            <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                          </div>
                          //input for tricking tricksy botses; submissions with it filled in won't work
                            <div style={{position: "absolute", left: "-5000px", ariaHidden: "true"}}><input type="text" name="b_9fd9953ee9186ce0be5282bc1_b458913c77" tabindex="-1" value="" /></div>
                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                            </div>
                        </form>
                        </div>

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
