import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import Image from "../components/image"
import SEO from "../components/seo"
import About from "./about.js"


const IndexPage = () => (

  <Layout>
    <SEO title="Resurrection Roller Derby" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <header className="masthead text-center text-white d-flex h-100">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="callout" style={{paddingTop: "40px"}}>
              RESURRECTION ROLLER DERBY
            </div>

          </div>
          <div className="col-lg-8 mx-auto">
            <img className="logo img-fluid" src={require('../img/logo_star.png')} />
           <a href="#schedule" className="nav-link js-scroll-trigger"><img src="../img/scrolldown.png" className="img-fluid"></img></a>
          </div>
        </div>
      </div>
    </header>

    <section className="firstSection" id="schedule">
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

            <table className="events-table">

            <thead >
              <tr>
                <td className="table-header">2019 Events</td>
                <td className="table-header">Location</td>
                <td className="table-header">Date</td>
                <td className="table-header"></td>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>Meet and Greet</td>
                  <td>Home</td>
                  <td>1/6</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Boot Camp</td>
                  <td>Home</td>
                  <td>1/28 - 2/7</td>
                  <td><a href="https://www.brownpapertickets.com/event/3909220" target="_new">Buy Tickets</a></td>
                </tr>
                <tr>
                  <td>RRG vs Sierra Regional</td>
                  <td>Home</td>
                  <td>3/23</td>
                  <td><a href="https://www.brownpapertickets.com/event/4046812" target="_new">Buy Tickets</a></td>
                </tr>
                <tr>
                  <td>RRG vs Cherry City</td>
                  <td>Away</td>
                  <td>4/27</td>
                  <td></td>
                </tr>
                <tr>
                  <td>RRG vs Peninsula Roller Girls</td>
                  <td>Home</td>
                  <td>5/18</td>
                  <td><a href="https://www.brownpapertickets.com/event/4046814" target="_new">Buy Tickets</a></td>
                </tr>
                <tr>
                  <td>RRG vs Monterey Bay Derby Dames</td>
                  <td>Home</td>
                  <td>6/22</td>
                  <td><a href="https://www.brownpapertickets.com/event/4046817" target="_new">Buy Tickets</a></td>
                </tr>
                <tr>
                  <td>RRG vs Sacramento</td>
                  <td>Home</td>
                  <td>8/24</td>
                  <td><a href="https://www.brownpapertickets.com/event/4046819" target="_new">Buy Tickets</a></td>
                </tr>
                <tr>
                  <td>RRG vs Silicon Valley Roller Girls</td>
                  <td>Home</td>
                  <td>10/26</td>
                  <td><a href="https://www.brownpapertickets.com/event/4070431" target="_new">Buy Tickets</a></td>
                </tr>
              </tbody>
              </table>

              </div>

          </div>
          <div className="col-sm-auto mx-auto text-left position-relative">
            <p className="text-main mb-4 main-text">
              <img src="../img/boot_camp.jpg" className="text-center img-fluid"></img></p>
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


    <div id="contact" className="bg-dark ">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mx-auto text-center">
            <h2 className="section-heading text-main mt-2">Contact Us</h2>
            <hr className="my-3"></hr>
            <p className="mb-4 text-main">Have questions? Just like to chat? Send us an email. We'll be happy to talk.</p>
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



  </Layout>

)

export default IndexPage
