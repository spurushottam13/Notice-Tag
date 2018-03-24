import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default class Main extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <p>THis is main Page</p>
            <button><Link to="/singup">SingUP</Link></button>
            <button><Link to="/signin">SignIN</Link></button>
            </div>
        );
    }
}