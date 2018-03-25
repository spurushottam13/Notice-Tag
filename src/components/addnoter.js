import React, {Component} from 'react';
import * as firebase from 'firebase';
import './main.css'
export default class AddNoter extends Component{ 
    constructor(props){
        super(props);
        this.state = {value:0};
        this.addNoter = this.addNoter.bind(this);
    }
    
    addNoter(event){
        var target = event.target
        console.log("Function name - SignUP")
        var noter = target.noter.value;
        var uid = localStorage.getItem('uid')
        console.log('uid',uid)
        const DbRef = firebase.database().ref().child("userPre/"+uid);
        DbRef.push().set(noter);
        DbRef.on('child_added', snap =>{
            window.location="/dash"
        })
        event.preventDefault();
    }
   
    
    render(){
        return(
            <div className="background">
            <div className="header">
           <img src={require('../components/assets/logo.png')}  className="logo"/>
            </div>
            <div className="sec1">
            <p>Add NoterID to get thier Notice</p>
            <form onSubmit={this.addNoter}>
                <br/>
                <input className="input" type="text" placeholder="Noter ID" name="noter" /><br/>
                <input className="button" type="submit" value="AddNoter" />
            </form>
            </div>
            </div>
        );
    }
}