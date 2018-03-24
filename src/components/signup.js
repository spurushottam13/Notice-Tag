import React , {Component} from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class SingUP extends Component {
    
    constructor(props){
        super(props);
        this.state = {value:0};
        this.signup = this.signup.bind(this);
        this.createDB = this.createDB.bind(this);
    }
    
    signup(event){
        var target = event.target
        console.log("Function name - SignUP")
        var name = target.name.value;
        var pass = target.pass.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(name,pass);
        promise.catch(e => console.log(e.message));
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                localStorage.setItem('uid',firebaseUser.uid);
                this.createDB(firebaseUser.uid);
                console.log("You are succedfully SignUP")
            }else{
                console.log("Not Logged");
            }
        })
        event.preventDefault();
    }
   
    createDB(UID){
        console.log('Function calledd');
        const DbRef = firebase.database();
        DbRef.ref('userPre/'+UID).set({
            1:'noterone',
        })
    }
    
    render(){
        return(
            <div>
            <p>THis is Singup page</p>
            <form onSubmit={this.signup}>
              <label>
                Name:
                <input type="text" name="name" />
              </label><br/>
                <label>
                Pass:
                <input type="text" name="pass" />
              </label><br/>
            <label>
                Re-Pass:
                <input type="text" name="repass" />
              </label><br/>
              <input type="submit" value="SignUP" />
            </form>
            </div>
        );
    }
}