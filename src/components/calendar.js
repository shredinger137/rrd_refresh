import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


export default class Calendar extends React.Component {
  state = {}
  componentDidMount() {
    var current = new Date();
    var calURL = "https://www.googleapis.com/calendar/v3/calendars/admin@rrgderby.org/events?key=" + process.env.ENV_CAL_KEY + "&timeMin=" + current.getFullYear() + "-01-01T00:00:00-07:00";
    var request =  new XMLHttpRequest();
    const setState = this.setState.bind(this);
    request.open('GET', calURL, true);
    request.onload = function (e) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var json_obj = (JSON.parse(request.responseText))['items']
          setState(json_obj)
        } else {
          console.error(request.statusText);
        }
      }

    }
    request.send();

  }

  eventFilter(data){


    var holdArr = [];
    var resultsArray = [];
    var date, team, place, linkText;

    for(var i = 0; i <= Object.keys(data).length; i++){
      if(data && data[i] && data[i]['summary']){

//Listing for event type "Game", entered as Away Game vs. or Home Game vs. Team Name.
//First condition: is this a valid game and/or listed event?
        if((data[i]['summary'].includes("Game") || (data[i]['description'] && data[i]['description'].includes("List"))) && data[i]['start']['dateTime']){
          var parsedDate = new Date(data[i]['start']['dateTime']);
            //create the date string in mm/dd format

              var mm = parsedDate.getMonth() + 1;
              var dd = parsedDate.getDate();
              date = mm + "/" + dd;

              //Check if home or away
              if(data[i]['location'] && data[i]['location'].includes("Cal Skate")){
                place = "Home";
              } else {
                place = "Away";
              }

              //For games, parse team name out of summary. Otherwise just use summary.
              //Note that this is very specific in naming convention.

              if(data[i]['summary'].includes("Game")){
                team = data[i]['summary'].substring(14, data[i]['summary'].length);
              } else {
                team = data[i]['summary'];
              }

              //Look for URLs in description. If they exist, set first one as ticket link.
              //Set ticket text, depending on if link should exist or not.
              //Event link is not currently used.
              if(data[i]['description']){
                var string = data[i]['description'];
                var matches = string.match(/\bhttps?:\/\/\S+/gi);
                if(matches && matches.length >= 1){
                  var ticketLink = matches[0];
                  var fbLink = matches[1];
                  if(ticketLink){
                    linkText = "Tickets";
                  } else {
                    linkText = "";
                  }
                } else {
                  linkText = "";
                }
              }
              else{
                linkText = "";
              }

              holdArr = [team, place, data[i]['location'], date, ticketLink, fbLink, parsedDate, linkText, i];
              resultsArray.push(holdArr);

      }

    }
      }
//On return - sort items by date
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
        <td className="table-header">2020 Events</td>
        <td className="table-header">Location</td>
        <td className="table-header">Date</td>
        <td className="table-header"></td>
      </tr>
    </thead>
    <tbody>
    {!this.state ? <div>Loading Events</div>
          :
              <>{(this.eventFilter(this.state)).map((event) =>
                <tr key={event[8]}>
                <td key={event[0]}>{event[0]}</td>
                <td key={event[1]}>{event[1]}</td>
                <td key={event[3]}>{event[3]}</td>
                <td key={event[4]}><a href={event[4]} target="_new">{event[7]}</a></td>
                </tr>
              )}</>
          }
      </tbody>
    </table>
    </div>
    );
  }
}
