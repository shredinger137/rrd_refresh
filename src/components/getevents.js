import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'


export default class GetEvents extends React.Component {
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
        if(data[i]['summary'].includes("Game")){
          if(data[i]['start']['dateTime']){
            var parsedDate = new Date(data[i]['start']['dateTime']);
            var current = new Date();
              if(current.getYear() == parsedDate.getYear()){
                var mm = parsedDate.getMonth() + 1;
                var dd = parsedDate.getDate();
                date = mm + "/" + dd;
                var team = data[i]['summary'].substring(14, data[i]['summary'].length);
                if(data[i]['summary'].includes("Home")){
                  var place = "Home";
                } else {
                  var place = "Away";
                }
                //TODO: This doesn't seem to be finding matches, but is correctly seeing the data.
                if(data[i]['description']){
                  var string = "";
                  var matches = string.match(/\bhttps?:\/\/\S+/gi);
                  console.log("searched");
                  console.log(matches);
                  console.log(data[i]['description'])
                }
                else{
                  var link = "null";
                }


                holdArr = [team, place, data[i]['location'], date, matches];
                resultsArray.push(holdArr);
              }
            }

          results = results + "<br /> " + data[i]['summary'];
      }}
      }
    console.log(resultsArray);
    return resultsArray;
  }


  render() {
    return (
    <div>
    <table className="events-table">
    {!this.state ?
              <div>{console.log("Loading")}</div>
          :
              <div>{(this.testFilter(this.state)).map((event) =>
                <tr>
                <td>{event[0]}</td>
                <td>{event[1]}</td>
                <td>{event[3]}</td>
                </tr>
              )}</div>
          }
    </table>
    </div>
    );
  }
}
