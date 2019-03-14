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
      <section id="sponsors" className="secondSection">
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-auto mx-auto text-center">
              <h2 className="section-heading text-white">Our Sponsors</h2>
              <div className="col-sm-auto mx-auto text-left">
                <hr className="light my-4" />
              </div>
            </div>
          </div>

          <div className="row top-buffer">
            <div className="col-md-3 col-sm-6 text-center"><a href="http://www.accentprinting.com/" target="sponsors_new"><img src={require('../img/sponsors/accent.png')} className="img-fluid w-75 text-center" /><br /><p className="text-main mb-4 text-center">Accent Printing and Design</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="https://www.strausfamilycreamery.com/" target="sponsors_new"><img src={require('../img/sponsors/strauss.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Straus Family Creamery</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="https://www.wickedslush.com/" target="sponsors_new"><img src={require('../img/sponsors/amyswickedslush.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Amy's Wicked Slush</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="http://northbaybrewerytours.com/" target="sponsors_new"><img src={require('../img/sponsors/nbbt.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">North Bay Brewery Tours</p></a></div>
          </div>
          <div className="row top-buffer">
            <div className="col-md-3 col-sm-6 text-center"><a href="https://www.poppy.bank/" target="sponsors_new"><img src={require('../img/sponsors/poppy_bank.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Poppy Bank</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="https://www.facebook.com/trixiebtrue/" target="sponsors_new"><img src={require('../img/sponsors/trixie.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Trixie B True</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="https://www.facebook.com/MoEs-Eagles-Nest-Deli-LLC-346779815837/" target="sponsors_new"><img src={require('../img/sponsors/moes.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Moe's Eagle's Nest Deli</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="http://www.ffwsales.com/" target="sponsors_new"><img src={require('../img/sponsors/foley_family.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Foley Family Wines</p></a></div>
          </div>
          <div className="row top-buffer">
            <div className="col-md-3 .jcol-sm-6 text-center"></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="https://www.greendogproject.org/" target="sponsors_new"><img src={require('../img/sponsors/greendog_rescue.jpg')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">The Green Dog Rescue Project</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"><a href="https://certifiedfixbodywork.amtamembers.com/" target="sponsors_new"><img src={require('../img/sponsors/certified_fix.png')} className="img-fluid w-75" /><br /><p className="text-main mb-4 text-center">Certified Fix Bodyworks</p></a></div>
            <div className="col-md-3 col-sm-6 text-center"></div>
          </div>

        </div>

        </div>

      </section>

  </Layout>

)

export default Sponsors
