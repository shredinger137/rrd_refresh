import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from '../components/seo'
import Signup from '../components/juniorsSignup'




const Juniors = () => (

  <Layout>
    <SEO title="Junior Roller Derby" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports', 'juniors', 'juniors derby', 'junior roller derby']} />
    <section id="juniors" className="juniors">
    <div className="content-block">
      <div className="row">
        <div className="col-sm-auto mx-auto text-center">
          <h1 className="section-heading text-white">Juniors</h1> </div>
          <div className="col-sm-auto mx-auto text-left">
          <hr className="light my-4" />
          <p className="text-main mb-4">
            Resurrection Roller Derby is proud to host our Junior Roller Derby League, offering opportunities for skaters age 7 - 17. Anyone with a desire to learn is welcome to join, regardless of experience. Our mission is to develop athletic ability, teamwork skills and sportsmanship for Sonoma County youth. We offer the only junior derby program in the North Bay area. 10 week sessions will be offered throughout the year.
            <br /><br />
            <strong>Next session: January  7th - March 10th<br /></strong>
            Pricing: $185 for new sign ups (includes jersey and insurance), $115 for returning skates (already have jersey and insurance).<br />
            <br />All practices take place at Cal Skate of Rohnert Park on Tuesdays, from 6:00pm to 7:30pm. Membership in the league includes free entry to Cal Skate's Friday sessions, 3:00pm - 5:30pm, during the session period.
            <br /><br />
            Skates will be provided at no additional charge. Skaters will have to provide and wear all appropriate safety gear- that means mouth guards, helmets, knee pads, elbow pads and wrist guards. Equipment can be purchased at Cal Skate's Pro Shop. <a href="mailto:info@rrderby.org">Contact us for details</a>.
            <br /><br />
          </p>
          <div><Signup /></div>
          </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <figure>
                <img src={require('../img/juniors_team.jpg')} className="img-fluid mx-auto" alt="Junior Roller Derby"/>
                <p><br /><br /></p>
              </figure>
            </div>
          <div className="row"><p><br /><br /></p></div>
        </div>
      </div>
  </section>

  </Layout>

)

export default Juniors
