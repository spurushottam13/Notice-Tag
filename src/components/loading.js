import React, {Component} from 'react';


export default class Loading extends Component {
    render(){
        return(
            <div className="background">
            <div className="header">
            <img src={require('../components/assets/logo.png')}  className="logo"/>
            </div>
            <p className="wait">Fetching Data . . </p>
            </div>
        );
    }
}