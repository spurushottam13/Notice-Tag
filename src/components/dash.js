import React, {Component} from 'react';
import * as firebase from 'firebase';
import Loading from '../components/loading';
import Adapter from '../components/adapter.js';
import { Link } from "react-router-dom";
import '../components/main.css';
export default class Dash extends Component {
    constructor(props){
        super(props);
        this.state = {
            UID: localStorage.getItem('uid'),
            path:[], // For maintaing Noter list
            msgStack:[], // Holding Notice from DB
        };        
    }
    
    componentWillMount(){
        console.log(this.state.msgStack.key)
        const DbRef = firebase.database();
        var temps = []
        const userPre = DbRef.ref().child('userPre/'+this.state.UID)
        userPre.on('value', datasnapshot => {
            var user = datasnapshot.val();
            console.log(user.length)
            console.log(typeof(user));
            Object.values(user).forEach((db_name,index) =>{
                console.log('rn',index,db_name,user.length);
                var temp00 = "datahouse/"+JSON.stringify(db_name);
                var temp01 = temp00.replace("\"","");
                var path = temp01.replace("\"",""); 
                const dbRef = firebase.database().ref().child(path);
                dbRef.on('value', datasnapshot => {
                    for(var key in datasnapshot.val()){
                        temps.push(datasnapshot.val()[key]);
                        temps.reverse()
                        this.setState({
                            msgStack : temps
                        })
                        console.log(this.state.msgStack,temps);
                    }
                })
            })
            
        });    
    }
    

    
    render(){
        if (!this.state.msgStack.length) return <Loading />;
        return(
            <div className="background">
            <div className="header">
            <img src={require('../components/assets/logo.png')}  className="logo"/>
            <Link  className="fab" to="/addNoter">+</Link>
            </div>
            <Adapter msgStack={this.state.msgStack} />
            </div>
        );        
    }
}

