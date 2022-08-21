import React,{PureComponent} from 'react';
import './App.scss';




class Modal extends PureComponent{
  
    render(){
  const {actions,text,header,handleClick,backgroundColor,color}  = this.props 

return(
<>

<div className='modal' >
  <div className='modal_main_container' style={{backgroundColor,color}} text ={text} header={header} handleClick={handleClick} >
  {actions}
  <h2>{header}</h2>
<p>{text}</p>
<button onClick={handleClick}>close</button>
</div>
</div>

</>
  ) 

}
}
export default Modal