import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


export default class GetEvents extends React.Component {
  state = {}


  componentDidMount() {

    var calURL = "https://www.googleapis.com/calendar/v3/calendars/admin@rrgderby.org/events?key=AIzaSyBtX6neX1dXbSc9xHmJ3YbUDa45enDJVAA";
    var request =  new XMLHttpRequest();
    var eventData, status = false;
    request.open('GET', calURL, true);

    request.onload = function (e) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var json_obj = (JSON.parse(request.responseText))
          status = true;
          this.setState({ json_obj });
        } else {
          console.error(request.statusText);
        }
      }
    }.bind(this);
    request.send();
  }


  render() {
    return (
      <div>
          {console.log(this.state.json_obj)}
      </div>
    );
  }
}
