import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    defCounter(){
        this.setState({
            count : this.state.count + 1
        }, ()=>{console.log("into this=",this.state.count)})
        // console.log("outside this=",this.state.count)
    }

    defIncrementFive(){
        this.defCounter()
        this.defCounter()
        this.defCounter()
        this.defCounter()
        this.defCounter()
    }

    render() {
        return (
            <div>
                <h1>Click me to count</h1>        
                <button onClick={()=>this.defIncrementFive()}>increment</button>
                <p> Total = {this.state.count}</p>
            </div>
        )
    }
}

export default Counter
