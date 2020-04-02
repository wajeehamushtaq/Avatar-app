import React, { Component } from 'react';
//import ReactDOM  from 'react-dom'
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';


class Avatar extends Component{

    constructor(){
        super();
        this.state={
            name:"Welcome to Avatar World"
        }
    }

    namechange(){
        this.setState({
            name:"Header has been changed"
        })
    }
        render(){
            const avatarlistarray=[
            {
                id:1,
                name:"Anamta",
                work:"Web Developer"
            },
            {
                id:2,
                name:"Kinza",
                work:"Web Developer"
            },
            {
                id:3,
                name:"Sidra",
                work:"Web Developer"
            },
            {
                id:4,
                name:"Ayesha",
                work:"Web Developer"
            }
            ]
        
            const arrayavatarcard = avatarlistarray.map((avatarcard,i) => {
                return<AvatarList key={i} id={avatarlistarray[i].id} 
                                    name={avatarlistarray[i].name} 
                                    work={avatarlistarray[i].work} />
            }
            )
        return(
                <div className = "mainpage">
                <h1>{this.state.name}</h1>
                 {arrayavatarcard}
                 <button onClick={ () => this.namechange() }>Change Heading Text</button>
                </div>
        )
        }

        }

export default Avatar