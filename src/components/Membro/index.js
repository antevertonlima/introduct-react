import React, { Component } from 'react';

class Membro extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
        //this.sair = this.sair.bind(this);
    }
    
    entrar(nome){
        let state = this.state;
        state.nome = nome;
        this.setState(state);
    }

    /**
    sair(){
        let state = this.state;
        state.nome = "Visitante";
        this.setState(state);
    }
     */

    render(){
        return(
            <div>
                <h2>Bem Vindo(a), {this.state.nome}</h2>
                <button onClick={() => this.entrar("Everton")}>
                    Entrar Sistema!
                </button>
                <button onClick={ () => this.setState({nome: "Visitante"}) }>
                    Sair
                </button>

            </div>
        );
    }
}

export default Membro;