import React from "react";
export default class FunctionalComp extends React.Component{
    
    state = {
    firstStory : "A story is basically a narrating of real or imaginary events, involving real or imaginary people. A story needs to be represented in words necessarily. Even images or moving pictures (movies) can narrate a story. A story is generally designed to entertain, and/or send a message across." 
    }
    componentDidMount(){
        setTimeout(() =>{
            this.setState({firstStory : "One day a rabbit was boasting about how fast he could run. He was laughing at the turtle for being so slow. Much to the rabbit’s surprise, the turtle challenged him to a race. The rabbit thought this was a good joke and accepted the challenge. The fox was to be the umpire of the race. As the race began, the rabbit raced way ahead of the turtle, just like everyone thought."})
            
        }, 10000);
    }
    render(){
        return (
            <div>     
            {
                this.props.isClicked ? null : <button onClick={this.props.fun}>button</button>
            }   
             
            </div>    
        )
    }
}