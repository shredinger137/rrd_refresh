import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"



const Payments = () => (

  <Layout>
    <SEO title="Members" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <meta name="robots" content="noindex, nofollow" />
    <section id="payments" className="secondSection">
  <div className="content-block">
    <div className="row">
      <div className="col-sm-auto mx-auto text-center">
        <h1 className="section-heading text-white">Dues Payments</h1> </div>
        <div className="col-sm-auto mx-auto text-left">
        <hr className="light my-4" />
        <p className="text-main mb-4">
        Use the form below to pay dues and other payments. If you need to pay other amounts or have questions, send us an email.
        </p>
        </div>
        <br /><br /><br />
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="6YLAXWGK4F2GU" />
          <table>
            <tr>
              <td>
              <input type="hidden" name="on0" value="Membership Type" />Skater Dues
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option value="Phoenix">Phoenix $51.84 USD</option>
                  <option value="Rec Skater">Burning Ember $41.84 USD</option>
                  <option value="Rec Skater (Tuesdays Only)">Rec Skater $31.84 USD</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="hidden" name="on1" value="Skater Name" />Skater Name
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="os1" maxlength="200" />
              </td>
            </tr>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src={require('../img/buynow.gif')} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        </form>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">

          </div>
        <div className="row"><p><br />Need to pay some other amount? <a href="https://www.paypal.me/resurrectionrg" target="_new">click here.</a><br /></p></div>
      </div>
    </div>
</section>

  </Layout>

)

export default Payments
