import React from "react"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'

export default class GetEvents extends React.Component {

render() {
  return (
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
        <tr>
          <td>Meet and Greet</td>
          <td>Home</td>
          <td>1/6</td>
          <td></td>
        </tr>
        <tr>
          <td>Boot Camp</td>
          <td>Home</td>
          <td>1/28 - 2/7</td>
          <td><a href="https://www.brownpapertickets.com/event/3909220" target="_new">Buy Tickets</a></td>
        </tr>
        <tr>
          <td>RRG vs Sierra Regional</td>
          <td>Home</td>
          <td>3/23</td>
          <td><a href="https://www.brownpapertickets.com/event/4046812" target="_new">Buy Tickets</a></td>
        </tr>
        <tr>
          <td>RRG vs Cherry City</td>
          <td>Away</td>
          <td>4/27</td>
          <td></td>
        </tr>
        <tr>
          <td>RRG vs Peninsula Roller Girls</td>
          <td>Home</td>
          <td>5/18</td>
          <td><a href="https://www.brownpapertickets.com/event/4046814" target="_new">Buy Tickets</a></td>
        </tr>
        <tr>
          <td>RRG vs Monterey Bay Derby Dames</td>
          <td>Home</td>
          <td>6/22</td>
          <td><a href="https://www.brownpapertickets.com/event/4046817" target="_new">Buy Tickets</a></td>
        </tr>
        <tr>
          <td>RRG vs Sacramento</td>
          <td>Home</td>
          <td>8/24</td>
          <td><a href="https://www.brownpapertickets.com/event/4046819" target="_new">Buy Tickets</a></td>
        </tr>
        <tr>
          <td>RRG vs Silicon Valley Roller Girls</td>
          <td>Home</td>
          <td>10/26</td>
          <td><a href="https://www.brownpapertickets.com/event/4070431" target="_new">Buy Tickets</a></td>
        </tr>
      </tbody>
      </table>


);
}}
