import React, { Component } from 'react'

export default class Message extends Component {

    //fopr state change
    constructor(){
        super()
        this.state = {
            message : 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: "thank you for subscribe"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
