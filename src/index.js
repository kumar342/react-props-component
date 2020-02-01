import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import FunctionalComp from "./FunctionalComp";
import GlassComp from "./GlassComp"


class App extends React.Component{
    state = {
        name:"shiva",
        isClicked:false
    }

    handleButton = () => {
        this.setState({isClicked:true})

    }
    render(){
        return(
            <div>
             <FunctionalComp fun={this.handleButton} isClicked={this.state.isClicked} />
             <GlassComp name={this.state.name} isClicked={this.state.isClicked}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))