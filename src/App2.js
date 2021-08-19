import React, { Component } from 'react';
import './App.css';

class Equipe extends Component{
  render(){
    return (
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return (
      <div>
        <h2>Olá sou o(a) {this.props.nome}.</h2>
        <p>Meu cargo é {this.props.cargo} e tenho {this.props.idade} anos de idade.</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Everton" cargo="Analista 11" idade="36"/>
      <Equipe nome="Brayan" cargo="Front-end" idade="35"/>
    </div>
  );
}

export default App;
