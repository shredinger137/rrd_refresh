import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import SkaterList from "../components/skaters"
import Popup from '../components/skaterPopup'

class Members extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          skaterClicked: "Luna",
          showPopup: false,
          
        };
    
        this.togglePopup = this.togglePopup.bind(this);
      }

      togglePopup(name) {  
        this.setState({  
             showPopup: !this.state.showPopup,
             skaterClicked: name
             
        });  
         } 
    closePopup() {
        this.setState({
            showPopup: false
        })
    }

render() {
 return (
  <Layout>
    <SEO title="Team Members" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports', 'sponsors', 'nonprofit']} />
      <section id="members" className="secondSection">
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-auto mx-auto text-center">
              <h1 className="section-heading text-white">Meet the Team</h1>
              <div className="col-sm-auto mx-auto text-left">
                <hr className="light my-4" />
              </div>
            </div>
          </div>

          <SkaterList
            togglePopup={this.togglePopup.bind(this)}
            skaterClicked={this.state.skaterClicked}
         />
          {this.state.showPopup ?  
          <Popup  
            skaterClicked={this.state.skaterClicked}
            closePopup={this.closePopup.bind(this)}
          />   : null  
        } 
        </div>

        </div>

      </section>

  </Layout>
 )

}}

export default Members
