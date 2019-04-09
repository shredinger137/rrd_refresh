import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import GetEvents from "../components/getevents"



const Testpage = () => (

  <Layout>
    <SEO title="Resurrection Roller Derby" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <section id="juniors" className="juniors">
      <div className="content-block">
      <div className="row">
        <div className="col-sm-auto mx-auto text-center">
          <h2 className="section-heading text-white">Juniors</h2> </div>
          <div className="col-sm-auto mx-auto text-left">
          <hr className="light my-4" / >
          <GetEvents />
          </div>
          </div>

        </div>
  </section>

  </Layout>

)

export default Testpage
