import React, {Component} from 'react';
import * as firebase from 'firebase';
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
        event.preventDefault();
    }
   
    
    render(){
        return(
            <div>
            <p>Add Noter</p>
            <form onSubmit={this.addNoter}>
              <label>
                Name:
                <input type="text" name="noter" />
              </label><br/>
              <input type="submit" value="AddNoter" />
            </form>
            </div>
        );
    }
}