import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


export default class GetEvents extends React.Component {
  state = {}
  componentDidMount() {

    var calURL = "https://www.googleapis.com/calendar/v3/calendars/admin@rrgderby.org/events?key=AIzaSyBtX6neX1dXbSc9xHmJ3YbUDa45enDJVAA";
    var request =  new XMLHttpRequest();
    var eventData, status = false;
    const setState = this.setState.bind(this);
    request.open('GET', calURL, true);

    request.onload = function (e) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var json_obj = (JSON.parse(request.responseText))['items']
          status = true;
          setState(json_obj)
        } else {
          console.error(request.statusText);
        }
      }

    }.bind(this);
    request.send();

  }

  testFilter(data){

    var results = "";
    for(var i = 0; i <= Object.keys(data).length; i++){
      if(data && data[i] && data[i]['summary']){
        if(data[i]['summary'].includes("Game")){
        console.log(data[i]['summary'])
        results = results + "<br /> " + data[i]['summary'];
      }}
      }
    return results;
  }


  render() {
    return (
    <div>
    {!this.state ?
              <div>{console.log("Loading")}</div>
          :
              <div>{this.testFilter(this.state)}</div>
          }
    </div>
    );
  }
}
