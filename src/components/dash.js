import React, {Component} from 'react';
import * as firebase from 'firebase';

export default class Dash extends Component {
    constructor(props){
        super(props);
        this.state = {value: 0};
    }
    render(){
        return(
            <div>
            <p>This is dash</p>
            </div>
        )
    }
}