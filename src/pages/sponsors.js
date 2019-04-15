import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import SponsorList from "../components/sponsors"

const Sponsors = () => (

  <Layout>
    <SEO title="Our Sponsors" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports', 'sponsors', 'nonprofit']} />
      <section id="sponsors" className="secondSection">
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-auto mx-auto text-center">
              <h1 className="section-heading text-white">Our Sponsors</h1>
              <div className="col-sm-auto mx-auto text-left">
                <hr className="light my-4" />
              </div>
            </div>
          </div>

          <SponsorList />

        </div>

        </div>

      </section>

  </Layout>

)

export default Sponsors
