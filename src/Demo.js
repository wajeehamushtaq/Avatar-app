import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Demo.css'
// component base architecture
class Demo extends Component{
    render(){
        return <div className="maindiv_style">
            <h1>Hello {this.props.name} </h1>
            <h2>my world</h2>
        </div>
    }
}

export default Demo
