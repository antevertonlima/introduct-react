import React, { Component } from 'react';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      form:{
        email: '',
        senha: '',
        sexo: 'M',
        error:"",
      }
    };

    this.changeValue = this.changeValue.bind(this);  
    this.entrar = this.entrar.bind(this);  
  }

  changeValue(e){
    let form = this.state.form;
    let t = e.target;
    form[t.name] = t.value;
    this.setState({form: form});
  }

  entrar(e){
    e.preventDefault();
    let state = this.state.form;
    const {email, senha, sexo} = state;

    if(email !== "" && senha !== "" && sexo !== ""){
      state.error = "";
      console.log(`Email: ${email} \nSenha: ${senha} \nSexo: ${sexo}`);
    }else{
      state.error = "Ops, parece que está faltando algo!";
    }
    this.setState(state);
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
        {this.state.error && <p>{this.state.form.error}</p>}
        <form onSubmit={this.entrar}>
            E-mail:
          <input name="email" type="email" value={this.state.form.email} onChange={this.changeValue} />
          <br/>       
          <br/>    
          Senha:
          <input name="senha" type="password" value={this.state.form.senha} onChange={this.changeValue} />
          <br/>       
          <br/>  
          Sexo:
          <select name="sexo" value={this.state.form.sexo} onChange={this.changeValue}>
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
