import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import Image from "../components/image"
import SEO from "../components/seo"



const Sponsors = () => (

  <Layout>
    <SEO title="Resurrection Roller Derby" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <section id="about" className="secondSection">
      <div className="content-block">
        <div className="row">

            <div className="col-sm-auto mx-auto text-left">
            <hr className="light my-4"></hr>
            <p className="text-main mb-4">
            THIS IS SPONSORDOME <br></br>   </p> </div>
            </div>
        </div>
      </section>

  </Layout>

)

export default Sponsors
