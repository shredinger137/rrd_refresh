import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"


const About = () => (

  <Layout>
    <SEO title="About Us" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <section id="about" className="secondSection">
      <div className="content-block">
        <div className="row">
          <div className="col-sm-auto mx-auto text-center">
            <h1 className="section-heading text-white">Who We Are</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-auto mx-auto text-left">
          <hr className="light my-4"></hr>
          <p className="text-main mb-4">
          Resurrection Roller Derby is a flat track roller derby league based out of Rohnert Park, CA. Since 2011 we've been bringing high quality competitive roller derby to Sonoma County. Our league is home to competitive players representing the North Bay throughout the country, recreational players scrimmaging at home and juniors developing their skills. We're a 501c(3) nonprofit created to promote the sport and provide opportunties for participation to the entire North Bay community. We're a member of the Women's Flat Track Roller Derby Association. <br></br>
          </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-center">
            <img src={require('../img/group1.jpg')} className="w-50" alt="Team"/><br></br><br></br><br></br>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-white">Community Involvement</h2>
        </div>
        </div>
        <div className="row">
          <div className="col-sm-auto mx-auto text-left">
            <hr className="light my-4"></hr>
            <p className="text-main mb-4">
            We take great pride in supporting our local community. Our contributions include volunteering, donating and advocating to spread awareness for important causes. At each of our games, a portion of proceeds are donated to a charitable cause. We also participate in blood drives, volunteer at local events and do what we can to make the community a better place.
            <br></br><br></br>
            <strong>Resurrection Roller Derby's Charity Partners</strong><br></br></p>
            <ul className="list-unstyled text-main mb-4">
              <li>Girls On Track</li>
              <li>The Living Room of Santa Rosa</li>
              <li>Social Advocates For Youth</li>
              <li>Redwood Empire Food Bank</li>
              <li>American Red Cross</li>
              <li>Council on Aging's Meals on Wheels</li>
              <li>Verity</li>
              <li>Committee on the Shelterless (COTS)</li>
            </ul>
          </div>
        </div>
        <div className="row"><p><br></br><br></br></p></div>

        <div className="row">
          <div className="col-sm-6 text-center">
            <img src={require('../img/blood.jpg')} className="img-fluid" alt="Blood drive" />
          </div>
          <div className="col-sm-6 text-center">
            <img src={require('../img/cotatitarod.jpg')} className="img-fluid" alt="Cotatiarod"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-auto text-left">
            <p className="text-main mb4"><br></br><br></br><br></br>If your nonprofit charity would like to be considered as a sponsored benefit, or you would like to discuss volunteer and outreach opportunities with our league, please send us an <a href="mailto:info@rrgderby.org">email.</a></p>
          </div>
        </div>
      </div>
      </section>

  </Layout>

)

export default About
