import React,{PureComponent} from 'react'

class Button extends PureComponent{


render(){
 function click(state,props){state({props:true})} 
   const {children,handleClick,backgroundColor,} = this.props
return(
 <>
<button style = {{backgroundColor}} onClick ={handleClick}>{children}</button>



</>)
}
    
}
export default Button;