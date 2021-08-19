import React, { Component } from 'react';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: 'M',
      error:"",
    };

    this.changeValue = this.changeValue.bind(this);  
    this.entrar = this.entrar.bind(this);  
  }

  changeValue(e){
    let objeto = e.target;
    let state = this.state;

    switch (objeto.name) {
      case "email":
        state.email = objeto.value;
        break;
      case "senha":
        state.senha = objeto.value;
        break;
      case "sexo":
        state.sexo = objeto.value;
        break;    
      default:
        state.email = "";
        state.senha = "";
        state.sexo = "";
        break;
    }
    this.setState(state);
  }

  entrar(e){
    e.preventDefault();
    let state = this.state;
    const {email, senha, sexo} = state;

    if(email !== "" && senha !== "" && sexo !== ""){
      state.error = "";
      console.log(`Email: ${email} \n Senha: ${email} \n Sexo: ${sexo}`);
    }else{
      state.error = "Ops, parece que está faltando algo!";
    }
    this.setState(state);
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.entrar}>
            E-mail:
          <input name="email" type="email" value={this.state.email} onChange={this.changeValue} />
          <br/>       
          <br/>    
          Senha:
          <input name="senha" type="password" value={this.state.senha} onChange={this.changeValue} />
          <br/>       
          <br/>  
          Sexo:
          <select name="sexo" value={this.state.sexo} onChange={this.changeValue}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <br/>       
          <br/> 
          <button>
            Entrar
          </button>
        </form>
      
      </div>
    );
  }
}

export default App;
