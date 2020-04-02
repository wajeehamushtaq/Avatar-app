import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Demo.css'

// functional base architecture
const Demo1=(props)=>{
    return <div className="maindiv_style">
            <h1>Hello {props.name} </h1>
            <h2>my world</h2>
        </div>
}

export default Demo1
