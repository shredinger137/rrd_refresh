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

    <div id = "submitted">
      <p className="text-main mb-4">
        <strong>Signup form is temporarily disabled. Use the options below to pay, and please email <a href="mailto:info@rrderby.org">info@rrderby.org</a> with your contact information and skater's name.</strong>
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
