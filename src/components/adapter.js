import React, {Component} from 'react';
import NoticeCard from '../components/noticeCard.js'
export default class Adapter extends Component{
 
    render(){
        let noticeList;
        console.log(this.props.msgStack);
        noticeList = this.props.msgStack.map( msg =>{
            return(
            <NoticeCard  msg={msg} />
                );
        })
        return(
            <div>
            {noticeList}
            </div>
        )
    }
}