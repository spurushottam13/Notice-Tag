import React, {Component} from 'react';
import * as firebase from 'firebase';

export default class Dash extends Component {
    constructor(props){
        super(props);
        this.state = {
            UID: localStorage.getItem('uid'),
            path:[],
            msgStack:[],
        };
         // Creating Path for DataBase
        const DbRef = firebase.database();
        const userPre = DbRef.ref().child('userPre/'+this.state.UID)
        userPre.on('value', datasnapshot => {
            var user = datasnapshot.val();
            console.log(user);  
            user.forEach(db_name =>{
                var temp00 = "datahouse/"+JSON.stringify(db_name);
                var temp01 = temp00.replace("\"","");
                var temp02 = temp01.replace("\"","");      
                this.state.path.push(temp02);
                console.log(this.state.path);
            })
            this.state.path.forEach( path => {
            console.log("Running");
            const dbRef = firebase.database().ref().child(path);
            dbRef.on('value', datasnapshot => {
                this.state.msgStack.push(datasnapshot.val());
               console.log(this.state.msgStack)
            })
        })
            
        });
        console.log('Thi '+this.state.UID)
        
        // Fetching from DataBase
        
    }
    
    componentDidMount(){
        
       
    }
    
    render(){
        return(
            <div>
            <p>This is {this.state.UID}</p>
            </div>
        )
    }
}