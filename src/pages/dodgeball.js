import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"


const Dodgeball = () => (

  <Layout>
    <SEO title="Dodgeball" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <section id="about" className="secondSection">
      <div className="content-block">
        <div className="row">
          <div className="col-sm-auto mx-auto text-center">
            <h1 className="section-heading text-white">Dodgeball</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-auto mx-auto text-left">
          <hr className="light my-4"></hr>
          <p className="text-main mb-4">
          Resurrection Roller Derby will be hosting our 4th Annual Dodgeball Tournament on March 5th, 2020, from 8pm to 10pm at Cal Skate of Rohnert Park. Think you have what it takes to dodge, dive, dip, duck and dodge in our tournament? Get your friends together and sign up now. There will be prizes.<br /><br />
          Teams are 6-8 players, with a registration fee of $10 per player. Dues paying members of RRD don't have to pay. Registration is done as a team, using the form below. To pay the registration fee on PayPal, visit <a href="https://www.paypal.me/resurrectionrg" target="_new">https://www.paypal.me/resurrectionrg</a> and enter the appropriate amount, with your team name as a note.  Tournament is open to all genders, 18+, and is played wearing shoes (not skates). Spectators are welcome at no charge.<br /><br />
          If you have any questions, send us an email at <a href="mailto:info@rrderby.org">info@rrderby.org</a>. Want to play, but don't have a team? Coordinate with other like-minded dodgeball enthusiasts at our Facebook event here.
          </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-center">
            
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdCOdJYfJKuQAM4rSjh87ZSDrM5EhBxXaWefwUClkXKXzrHMw/viewform?embedded=true" width="640" height="1080" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

          </div>
        </div>

      </div>
      </section>

  </Layout>

)

export default Dodgeball
