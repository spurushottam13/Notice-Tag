import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Main extends Component {
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