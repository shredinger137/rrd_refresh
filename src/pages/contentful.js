import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import Image from "../components/image"
import SEO from "../components/seo"

const About = () => (

  <Layout>
    <SEO title="Resurrection Roller Derby" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <section id="about" class="secondSection">
      <div class="content-block">


        <div class="row">
          <div class="col-sm-auto text-left">
            <p class="text-main mb4"><br></br><br></br><br></br>If your nonprofit charity would like to be considered as a sponsored benefit, or you would like to discuss volunteer and outreach opportunities with our league, please send us an <a href="mailto:info@rrgderby.org">email.</a></p>
          </div>
        </div>
      </div>
      </section>
  </Layout>

)

export default About
