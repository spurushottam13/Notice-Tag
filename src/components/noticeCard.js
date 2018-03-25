import React, {Component} from 'react';
import '../components/main.css';
export default class NoticeCard extends Component{ 
    render(){
        return(
            <div className="card">
            <p className="msgNoter">{this.props.msg.noter}</p>  
            <p className="msg">{this.props.msg.msg}</p>
            <p className="msgDate">Date: {this.props.msg.date}</p>
            </div>
        )
    }
}