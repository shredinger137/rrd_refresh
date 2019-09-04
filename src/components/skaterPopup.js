import React from 'react';  
import './members.css';

class Popup extends React.Component {  
  render() {  
  console.log(this.props.picture);
return (  
<div className='popupWrapper' onClick={this.props.closePopup}>
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.skaterClicked}</h1>
<img src={this.props.picture}  className="img-fluid text-center w-25" alt={this.props.skaterClicked}></img> 
<p style={{color: 'black'}}>{this.props.content}</p>
<p>
<br /><br />


</p>

</div>  
</div> 
</div>
);  
}  
}  

export default Popup;