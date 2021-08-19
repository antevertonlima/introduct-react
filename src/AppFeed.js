import React, { Component } from 'react';
import Feed from './components/Feed'

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:1, username:'Matheus', likes:10, coments:2},
        {id:2, username:'Everton', likes:100, coments:20},
        {id:3, username:'Brayan', likes:110, coments:12},
        {id:4, username:'Joe', likes:20, coments:22},
      ]
    };
    
  }

  render(){
    return (
      <div>
        {
          this.state.feed.map((item)=>{
            return(
              <Feed id={item.id} 
                    username={item.username} 
                    curtidas={item.likes}
                    comentarios={item.coments} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
