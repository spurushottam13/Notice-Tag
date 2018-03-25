import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../components/first.css';
import * as firebase from 'firebase';

export default class Main extends Component {
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
                window.location="/dash"
                console.log("The UID is "+localStorage.getItem('uid'))
            }else{
                console.log("Not Logged");
            }
        })
        event.preventDefault();
    }
    render(){
        return(
            <div className="background">
            <div className="line"></div>
            <div className="wrap">
                <img src={require('../components/assets/slogo.png')}  className="mlogo"/>
                    <div className="msec1">
                        <p className="mtext">Welcome</p>
                        <p className="mtext">SignIN</p>
                    </div>
                    <form onSubmit={this.login}>
                        <input className="minput" placeholder="Username" type="text" name="name" />
                        <input className="minput" placeholder="Password" type="text" name="pass" />
                      <input className="mbutton"type="submit" value="Login" />
                    </form>
                      
                    <p className="mfooter">Do not have account?<Link to="/singup"> SignUP</Link></p>
            </div>
            </div>
        );
    }
}




/*
<button><Link to="/singup">SingUP</Link></button>
            <button><Link to="/signin">SignIN</Link></button>
            */