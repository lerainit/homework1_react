import React,{PureComponent} from 'react'

class Button extends PureComponent{


render(){

   const {children,handleClick,backgroundColor,} = this.props
return(
 <>
<button style = {{backgroundColor}} onClick ={handleClick}>{children}</button>



</>)
}
    
}
export default Button;
