import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


export default class Calendar extends React.Component {
  state = {}
  componentDidMount() {

    var calURL = "https://www.googleapis.com/calendar/v3/calendars/admin@rrgderby.org/events?key=" + process.env.ENV_CAL_KEY;
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
    var holdArr = [];
    var resultsArray = [];
    var date;

    for(var i = 0; i <= Object.keys(data).length; i++){
      if(data && data[i] && data[i]['summary']){

//Listing for event type "Game", entered as Away Game vs. or Home Game vs. Team Name.

        if((data[i]['summary'].includes("Game") || (data[i]['description'] && data[i]['description'].includes("List"))) && data[i]['start']['dateTime']){
          var parsedDate = new Date(data[i]['start']['dateTime']);
          var current = new Date();
            //Check if current year (this season only)
            //Note - there may be a way to do this in the API
            if(current.getYear() == parsedDate.getYear()){
              var mm = parsedDate.getMonth() + 1;
              var dd = parsedDate.getDate();
              date = mm + "/" + dd;

              if(data[i]['location'] && data[i]['location'].includes("Cal Skate")){
                var place = "Home";
              } else {
                var place = "Away";
              }

              if(data[i]['summary'].includes("Game")){
                var team = data[i]['summary'].substring(14, data[i]['summary'].length);
              } else {
                var team = data[i]['summary'];
              }

              if(data[i]['description']){
                var string = data[i]['description'];
                var matches = string.match(/\bhttps?:\/\/\S+/gi);
                if(matches && matches.length <= 2){
                  var ticketLink = matches[0];
                  var fbLink = matches[1];
                  if(ticketLink){
                    var linkText = "Tickets";
                  } else {
                    var linkText = "";
                  }
                } else {
                  linkText = "";
                }
              }
              else{
                var linkText = "";
              }

              holdArr = [team, place, data[i]['location'], date, ticketLink, fbLink, parsedDate, linkText];
              resultsArray.push(holdArr);
            }
          results = results + "<br /> " + data[i]['summary'];
      }
//Add objects that aren't games, but are still important

    }
      }

    console.log(resultsArray);

    return resultsArray.sort(function compare(a, b) {var dateA = new Date(a[6]);
            var dateB = new Date(b[6]);
            return dateA - dateB;
      });

  }


  render() {
    return (
    <div>
    <table className="events-table">
    <thead >
      <tr>
        <td className="table-header">2019 Events</td>
        <td className="table-header">Location</td>
        <td className="table-header">Date</td>
        <td className="table-header"></td>
      </tr>
    </thead>
    <tbody>
    {!this.state ? <div>Loading Events</div>
          :
              <>{(this.testFilter(this.state)).map((event) =>
                <tr>
                <td>{event[0]}</td>
                <td>{event[1]}</td>
                <td>{event[3]}</td>
                <td><a href={event[4]} target="_new">{event[7]}</a></td>
                </tr>
              )}</>
          }
      </tbody>
    </table>
    </div>
    );
  }
}
