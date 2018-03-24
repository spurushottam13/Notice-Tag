import React , {Component} from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class SignIN extends Component {
    
    constructor(props){
        super(props);
        this.state = {value:'SignUP'};
        this.submit = this.login.bind(this);
    }
    
    login(event){
        var target = event.target
        console.log("Sing In Function");
        var name = target.name.value;
        var pass = target.pass.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(name,pass);
        promise.catch(e => console.log(e.message));
        firebase.auth().onAuthStateChanged(firebaseUser =>{
            if(firebaseUser){
                localStorage.setItem('uid', firebaseUser.uid);
                console.log("The UID is "+localStorage.getItem('uid'))
            }else{
                console.log("Not Logged");
            }
        })
        event.preventDefault();
    }
    render(){
        return(
            <div>
            <form onSubmit={this.login}>
              <label>
                Name:
                <input type="text" name="name" />
              </label><br/>
                <label>
                Pass:
                <input type="text" name="pass" />
              </label><br/>
              <input type="submit" value="Login" />
            </form>
            </div>
        );
    }
}