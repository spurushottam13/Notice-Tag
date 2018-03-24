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
        console.log(target.name.value);
        console.log("FUC")
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