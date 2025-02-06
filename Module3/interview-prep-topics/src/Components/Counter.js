import React from "react";

class Counter extends React.Component{

    constructor(props){
        console.log("Inside a constrcutor");
        super(props);

        //State Initialization
        this.state = {count:0};
        
    }

     onIncrement=()=>{
        //State Update
        this.setState({count:this.state.count+1});
    }

    render(){
        
        console.log("Inside Render");

        return <div>
            {/* State Access */}
            <p> Count : {this.state.count} </p>  
            <button onClick={this.onIncrement} > Increment </button>
        </div>

    }

}

export default Counter;