import React from 'react';  
import './members.css';

class Popup extends React.Component {  
  render() {  
  
return (  
<div className='popupWrapper' onClick={this.props.closePopup}>
<div className='popup'>  
<div className='popup\_inner'>  
<h1>This is a Popup Thing, where we would talk about {this.props.skaterClicked} if this page were finished.</h1> 
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