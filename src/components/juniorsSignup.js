import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'



export default class Signup extends React.Component {

render() {
  return (<div>

<form method="post" action="/api/sendmail.php">
<div class="form-group row w-75 text-center">
        <label for="skatername" class="col-sm-3 col-form-label text-main text-left">Skater's Legal Name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="skatername" name="skaterName" />
        </div>
      </div>
      
      <div class="form-group row w-75 text-center">
        <label for="preferredname" class="col-sm-3 col-form-label text-main text-left">Skater's Nickname</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="preferredname" name="preferredName" />
        </div>
      </div>
      <div class="form-group row w-75 text-center">
        <label for="age" class="col-sm-3 col-form-label text-main text-left">Age</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="age" name="age" />
        </div>
      </div>
      <div class="form-group row w-75 text-center">
      <label for="age" class="col-sm-3 col-form-label text-main text-left">Returning?</label>
        <div class="col-sm-9 text-main text-left">
          <input type="radio" name="returning" value="new" checked />New Skater<br />
          <input type="radio" name="returning" value="returning" /> Returning Skater<br /><br />
        </div>
      </div>      
      <div class="form-group row w-75 text-center">
        <label for="guardian" class="col-sm-3 col-form-label text-main text-left">Guardian Name(s)</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="guardian" name="guardian" />
        </div>
      </div>
      <div class="form-group row w-75 text-center">
        <label for="email" class="col-sm-3 col-form-label text-main text-left">Contact Email</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="email" name="email" />
        </div>
      </div>
      <div class="form-group row w-75 text-center">
        <label for="phone" class="col-sm-3 col-form-label text-main text-left">Contact Phone</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="phone" name="phone" />
        </div>
      </div>
      <div class="form-group row w-75 text-center">
        <label for="size" class="col-sm-3 col-form-label text-main text-left">Shirt Size</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="size" name="size" />
        </div>
      </div>
      <div class="form-group row w-75 text-center">
        <label for="notes" class="col-sm-3 col-form-label text-main text-left">Anything else we should know?</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="notes" name="notes" />
        </div>
      </div>
      <div class="form-group row text-center">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Sign Up</button>
          <br /><br />
        </div>
      </div>

    
  
      
</form>


  </div>)

}}
