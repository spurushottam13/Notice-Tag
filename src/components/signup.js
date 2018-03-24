import React , {Component} from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class SingUP extends Component {
    
    constructor(props){
        super(props);
        this.state = {value:0};
        this.signup = this.signup.bin
    }
    
   
    
    render(){
        return(
            <div>
            <p>THis is SIngup page</p>
            </div>
        );
    }
}