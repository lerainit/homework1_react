//import logo from './logo.svg';
import './App.scss';
import React, {Component} from 'react';
import Modal from './Modal';
import Button from './button.jsx';
import modalDeclarations from './modalDeclarations';
import buttons from './buttons';


class App extends Component{
state = {
 
 isOpenModal:false,
 buttonText:buttons,

backGroundColor:buttons[0].backGroundColor ,
text:modalDeclarations[0].text,
header:modalDeclarations[0].header,
backgroundColor:modalDeclarations[0].backgroundColor,
color:modalDeclarations[0].color,
actions:<><button className='action_btn'>OK</button><button className='action_btn'>Cancel</button></>

}

render(){


const {isOpenModal,buttonText,text,header,backgroundColor,color,actions} = this.state

return(

<>

<div className='App'>




<Button backgroundColor= {buttons[0].backGroundColor} handleClick ={() =>{ this.setState({isOpenModal:true,text:modalDeclarations[0].text,header:modalDeclarations[0].header,backgroundColor:modalDeclarations[0].backgroundColor,color:modalDeclarations[0].color,actions:<><button className='action_btn'>OK</button><button className='action_btn'>Cancel</button></>})}}>{buttons[0].text}</Button>
    
<Button backgroundColor= {buttons[1].backGroundColor}  handleClick ={() =>{ this.setState({isOpenModal:true,text:modalDeclarations[1].text,header:modalDeclarations[1].header,backgroundColor:modalDeclarations[1].backgroundColor,color:modalDeclarations[1].color,actions:<><button className='action_btn2'>OK</button><button className='action_btn2'>Cancel</button></>})}}>{buttons[1].text}</Button>
    
</div>
{ isOpenModal &&
<Modal color ={color} backgroundColor ={backgroundColor} actions = {actions} text={text} header={header} handleClick={()=>{this.setState({isOpenModal:false})}}>


</Modal>
}

</>








)





}

  
}



export default App;
