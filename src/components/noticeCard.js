import React, {Component} from 'react';
export default class NoticeCard extends Component{ 
    render(){
        return(
            <div>
            <strong>{this.props.msg.date}</strong>:
            <p>{this.props.msg.msg}</p>
            </div>
        )
    }
}