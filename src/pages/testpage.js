import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import Calendar from "../components/calendar"



const Testpage = () => (

  <section className="firstSection">
  <div>
    <div className="content-block">
      <div className="row">
        <div className="col-sm-auto mx-auto text-center">
          <h2 className="section-heading text-white">Events</h2>
          <hr className="light my-4"></hr>

        <div className="content-partial text-left">
          <div className="text-main loud-text">Skate fast. Hit hard.</div>
          <p className="text-main medium-loud">Sonoma County flat track roller derby.</p>
          <p className="text-main">Our league of athletes, officials and volunteers call <a href="https://goo.gl/maps/PPMmMPAutmG2" target="_new">Cal Skate of Rohnert Park</a> home. That's where you'll find all of our home games and training events. We&#39;d love to have you join us.</p>
        </div>
        <div className="content-partial2 ">

          <Calendar></Calendar>
          <br />
            <p className="text-main text-left"><strong>Season pass tickets available now: <a href="https://www.brownpapertickets.com/event/4094543" target="_new">click here to purchase.</a></strong></p>
            <br /><br />
        </div>

        </div>
      </div>
    </div>
  </div>
  </section>


)

export default Testpage
