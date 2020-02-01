import React from "react";
export default class GlassComp extends React.Component {
   

    render(){
        
        return(
              <div>
              <h2>{this.props.isClicked ? this.props.name : null}</h2>
              
              </div>
        )
    }
}