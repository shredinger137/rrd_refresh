import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import { Link } from 'gatsby';
import Calendar from "../components/calendar"


export default class Home extends React.Component {


getSectionRef = el => {
      this.sectionRef = el;
    }

  onButtonClick = e => {
    if (this.sectionRef) {
      window.scrollTo({
        top: this.sectionRef.offsetTop,
        behavior: 'smooth',
      });
    }
}



  render() {


    return (

  <Layout>
    <SEO title="Resurrection Roller Derby" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <header className="masthead text-center text-white d-flex mw-100"  style={{height: "100vh"}}>
      <div className="container ">
        <div className="row" >
          <div className="col-lg-10 mx-auto">
            <div className="callout" >
              RESURRECTION ROLLER DERBY
              </div>

          </div>
        </div>
        <div className="row h-50">
          <div className="col-lg-8 mx-auto">
            <img className="logo img-fluid" src={require('../img/logo_star.png')} alt="Resurrection Roller Derby Star Logo"/><br />
            <img src={require('../img/scrolldown.png')} className="img-fluid" onClick={this.onButtonClick} style={{cursor: "pointer"}} alt="Down Arrow"/>
          </div>
        </div>
      </div>
    </header>

    <section className="firstSection" id="schedule" ref={this.getSectionRef}>
    <div>
      <div className="content-block">
        <div className="row">
          <div className="col-sm-auto mx-auto text-center">
            <h1 className="section-heading text-white">Events</h1>
            <hr className="light my-4"></hr>

          <div className="content-partial text-left">
            <div className="text-main loud-text">Skate fast. Hit hard.</div>
            <p className="text-main medium-loud">Sonoma County roller derby.</p>
            <p className="text-main">Our league of athletes, officials and volunteers call <a href="https://goo.gl/maps/PPMmMPAutmG2" target="_new">Cal Skate of Rohnert Park</a> home. That's where you'll find all of our home games and training events. We&#39;d love to have you join us. RRD welcomes youth and adult skaters from throughout Sonoma County.</p>
          </div>
          <div className="content-partial2 ">

            <Calendar></Calendar>
            <br />
             <br />
             <p className="text-main">All practices and events are postponed due to the ongoing COVID-19 pandemic.</p>
          </div>

          </div>


        </div>
        <div className="row">
         <br />
        </div>
      </div>
    </div>
    </section>

    <section id="join" className="secondSection">
      <div className="content-block">
        <div className="row">
          <div className="col-sm-auto mx-auto text-center">
            <h1 className="section-heading text-white">Get Involved</h1> </div>
            <div className="col-sm-auto mx-auto text-left">
            <hr className="light my-4"></hr>
            <p className="text-main mb-4">
            <strong>All skate activities have been postponed due to COVID-19 concerns and the temporary closing of Cal Skate. We will update this page and our social media channels as our schedule develops.<br /></strong>
            <br/>

            New Skaters: New skaters get involved by attending one of our regularly offered Boot Camps or our new skater training sessions. Skater Intake nights happen the first Tuesday of each month from March to October, starting at 7:30 pm. Training nights are available every Tuesday after that at 8pm. Your first one is free, so if you're curious please come visit us. Our skaters are always happy to talk. Loaner gear and skates are available at no charge. Just bring comfortable clothes, a water bottle and yourself.  <Link to="/newskaters/">Click here</Link> to learn more.
            <br></br><br></br>
            Transferring Skaters: If you've been skating with another league, transferring to RRD is usually as easy as asking. We don't require anything from your previous league, but may request verification of past rostering and minimum skills competency. Please <a href="mailto:info@rrderby.org">contact us</a> directly for details.
              <br></br><br></br>
            Volunteers: Playing Derby isn't the only way to get involved. Volunteers work behind the scenes to make this league possible. These include referees, non-skating officials (NSOs) and support staff of all kinds. We are always looking for volunteers to help with all of our projects - marketing, bout production, event coordination and more. Send us an email if you'd like to get involved at any level. We&#39;d love to hear from you!
            </p>

          </div>
        </div>
      </div>
    </section>


  </Layout>
)

}}
