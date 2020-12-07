import React from "react";
import axios from "axios";


export default class SuggestionBox extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  }

  handleSubmit(e) {
    
    e.preventDefault();
    const form = e.target;
    axios({
      method: "post",
      url: "https://getform.io/f/21e78bb9-d50f-4ad4-919d-b75f587e64b9",
      data: new FormData(form)
    })
      .then(r => {
        console.log(r);
        document.getElementById("formDiv").style.display = "none";
        document.getElementById("submitted").style.display = "inline";
      })
      .catch(r => {
        console.log(r);
        document.getElementById("error").display = "inline";
      });
  }

  revealForm = () => {
    document.getElementById("submitted").style.display = "none";
    document.getElementById("formDiv").style.display = "inline";
  }

  render() {
    return (<div>

      <form onSubmit={this.handleSubmit} id="formDiv" style={{ display: 'inline' }}>
        <p>
          <strong>Suggestions Box</strong>
          <br /><br />
          Messages submitted by this form will be sent to the Diversity and Inclusivity Committee. Concerns, suggestions and other needs will be looked into by the committee or forwarded to an appropriate league representative.
        </p>
        <span id="error" style={{display: "none"}}>An error occured.</span>
        <div className="form-group row w-75 text-center">
          <label htmlFor="name" className="col-sm-3 col-form-label text-main text-left">Name:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="name" name="name" pattern="^[\w\-\( \) \? \s]+$" />
          </div>
        </div>

        <div className="form-group row w-75 text-center">
          <label htmlFor="email" className="col-sm-3 col-form-label text-main text-left">Email:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="email" name="email" type="email" />
          </div>
        </div>


        <div className="form-group row w-75 text-center">
          <label htmlFor="notes" className="col-sm-3 col-form-label text-main text-left">Message:</label>
          <div className="col-sm-9">
            <textarea className="form-control" id="message" name="message" required />
          </div>
        </div>
        <div className="form-group row text-center">
          <div className="col-sm-10">
            <button className="btn btn-primary">Submit</button>
            <br /><br />
          </div>
        </div>
      </form>
      <div id="submitted" style={{ display: 'none' }}>
        <p className="text-main mb-4">
          <strong>Message has been sent.</strong>
        </p>
      </div>
    </div>


    )



  }
}
