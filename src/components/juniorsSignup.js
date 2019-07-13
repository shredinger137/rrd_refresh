import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'

export default class Signup extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  }

  handleSubmit(event) {
    const form = event.target;
    event.preventDefault();
    const data = {};
   
    for (let element of form.elements) {
      if (element.tagName === 'BUTTON') { continue; }
      data[element.name] = element.value;
    }
    var str_json = JSON.stringify(data)
    console.log(data)

    var request= new XMLHttpRequest()
    request.open("POST", "/api/sendmail.php", true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(str_json)
    console.log(str_json)

    document.getElementById("formDiv").style.display = "none";
    document.getElementById("submitted").style.display = "inline";
  }

revealForm = () => {
  document.getElementById("submitted").style.display = "none";
  document.getElementById("formDiv").style.display = "inline";
}

render() {
  return (<div>

<form onSubmit={this.handleSubmit} id = "formDiv" style={{display: 'inline'}}>
  <p>
  <strong>Fill out the form below to sign up for the September session.</strong>
            <br /><br />    
  </p>
<div className="form-group row w-75 text-center">
        <label htmlFor="skatername" className="col-sm-3 col-form-label text-main text-left">Skater's Legal Name</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="skatername" name="skaterName" required pattern="^[\w\-\( \) \? \s]+$"/>
        </div>
      </div>
      
      <div className="form-group row w-75 text-center">
        <label htmlFor="preferredname" className="col-sm-3 col-form-label text-main text-left">Skater's Nickname</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="preferredname" name="preferredName" pattern="^[\w\-\( \) \? \s]+$" />
        </div>
      </div>
      <div className="form-group row w-75 text-center">
        <label htmlFor="age" className="col-sm-3 col-form-label text-main text-left">Age</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="age" name="age" />
        </div>
      </div>
      <div className="form-group row w-75 text-center">
      <label htmlFor="age" className="col-sm-3 col-form-label text-main text-left">Returning?</label>
        <div className="col-sm-9 text-main text-left">
          <input type="radio" name="returning" value="new" />New Skater<br />
          <input type="radio" name="returning" value="returning" /> Returning Skater<br /><br />
        </div>
      </div>      
      <div className="form-group row w-75 text-center">
        <label htmlFor="guardian" className="col-sm-3 col-form-label text-main text-left">Guardian Name(s)</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="guardian" name="guardian" required />
        </div>
      </div>
      <div className="form-group row w-75 text-center">
        <label htmlFor="email" className="col-sm-3 col-form-label text-main text-left">Contact Email</label>
        <div className="col-sm-9">
          <input type="email" className="form-control" id="email" name="email" required type="email" />
        </div>
      </div>
      <div className="form-group row w-75 text-center">
        <label htmlFor="phone" className="col-sm-3 col-form-label text-main text-left">Contact Phone</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="phone" name="phone" />
        </div>
      </div>
      <div className="form-group row w-75 text-center">
        <label htmlFor="size" className="col-sm-3 col-form-label text-main text-left">Shirt Size</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="size" name="size" />
        </div>
      </div>
      <div className="form-group row w-75 text-center">
        <label htmlFor="notes" className="col-sm-3 col-form-label text-main text-left">Anything else we should know?</label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="notes" name="notes" />
        </div>
      </div>
      <div className="form-group row text-center">
        <div className="col-sm-10">
          <button className="btn btn-primary">Sign Up</button>
          <br /><br />
        </div>
      </div>
    </form>
    <div id = "submitted" style={{display: 'none'}}>
      <p className="text-main mb-4">
        <strong>Sign up has been received. We'll be in touch.</strong>
          <br /><br />
           Please choose the correct option below and click or tap 'Buy Now' to pay your fees using PayPal. This should open in a new window.
           <br/><br/>
          </p>
          <div className="row">
          <div className="col-sm-auto mx-auto text-center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="G497RDU4MGE8G" />
            <table>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Payment Selection" />
                    Payment Selection
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
            	      <option value="New Skater">New Skater $178.80 USD</option>
            	      <option value="Returning Skater">Returning Skater $118.64 USD</option>
                  </select>
                  </td> 
                </tr>
            </tbody>
            </table>
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <br /><br />
            <p className="text-main mb-4">
              Need to sign up another skater? <button className="btn btn-primary" onClick={this.revealForm}>Click  here to go back</button>
            </p>
          </div>
        </div>
    </div>
  </div>

  
  )

  

}}
