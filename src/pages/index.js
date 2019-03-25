import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import Events from "../components/events"
import { graphql, Link } from 'gatsby';


var contentful = require('contentful')
const client = contentful.createClient({
  space: "ypg5e55nvkzw",
  accessToken: "d19e22db369e56f049bf26444c1dc498e96fc8aad369b9fc87ba54b90c7fba3b"
})


export default class Home extends React.Component {


getContentful = () => {client.getEntry('6W8I71USqy1hbYPQFzxNiu')
.then((entry) => console.log(entry))
.catch(console.error)
}

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
              {this.getContentful}
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
            <h2 className="section-heading text-white">Events</h2>
            <hr className="light my-4"></hr>

          <div className="content-partial text-left">
            <div className="text-main loud-text">Skate fast. Hit hard.</div>
            <p className="text-main medium-loud">Sonoma County flat track roller derby.</p>
            <p className="text-main">Our league of athletes, officials and volunteers call <a href="https://goo.gl/maps/PPMmMPAutmG2" target="_new">Cal Skate of Rohnert Park</a> home. That's where you'll find all of our home games and training events. We'd love to have you join us.</p>
          </div>
          <div className="content-partial2 ">

            <Events></Events>

          </div>

          </div>
        </div>
      </div>
    </div>
    </section>

    <section id="join" className="secondSection">
      <div className="content-block">
        <div className="row">
          <div className="col-sm-auto mx-auto text-center">
            <h2 className="section-heading text-white">Get Involved</h2> </div>
            <div className="col-sm-auto mx-auto text-left">
            <hr className="light my-4"></hr>
            <p className="text-main mb-4">

            New Skaters: New skaters get involved by attending one of our regularly offered two week Boot Camps or our Newbie Night training sessions. These take place every Tuesday at Cal Skate in Rohnert Park, starting at 7:30 pm. Your first one is free, so if you're curious please come visit us. Our skaters are always happy to talk. Loaner gear and skates are available at no charge. Just bring comfortable clothes, a water bottle and yourself. <a href="./newskaters.html">Click here</a> to learn more.
            <br></br><br></br>
            Transferring Skaters: If you've been skating with another league, transferring to RRG is usually as easy as asking. We don't require anything from your previous league, but may request verification of past rostering and minimum skills competency. Please contact us directly for details.
              <br></br><br></br>
            Volunteers: Playing Derby isn't the only way to get involved. Volunteers work behind the scenes to make this league possible. These include referees, non-skating officials (NSOs) and support staff of all kinds. We are always looking for volunteers to help with all of our projects - marketing, bout production, event coordination and more. Send us an email if you'd like to get involved at any level. We'd love to hear from you!
            </p>


          </div>
        </div>
      </div>
    </section>


  </Layout>
)
}}
