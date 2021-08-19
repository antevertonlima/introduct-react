import React, { Component } from 'react';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: false
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({ status: true })
  }
  
  sair(){
    this.setState({ status: false })
  }

  render(){
    return (
      <div>
        {
          this.state.status ?
          <div>
            <h2>Bem vindo ao sistema!</h2>
            <button onClick={this.sair}>
              Sair do sistema
            </button>
          </div> :
          <div>
            <h2>Olá Visitante, faça o login!</h2>
            <button onClick={this.entrar}>
              Entrar no sistema
            </button>
          </div>

        }
      </div>
    );
  }
}

/*
{ this.state.status === 1 &&
          <h1>Bem Vindo ao sistema!</h1>  
        }
        <div>
          <h2>Curso ReactJs</h2>
        </div>
*/

export default App;
