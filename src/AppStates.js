import React, { Component } from 'react';


class AppStates extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            nome: "Everton",
            contador: 0,
        };
        
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome = "Nome mudou para Oshima.";
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;
        state.nome = "Nome voltou a ser Everton.";
        if (state.contador < 0) {
            state.contador = 0;
        }
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h2>{this.state.nome}</h2>
                <hr/>
                <h1>Contador</h1>
                
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    };
}

export default AppStates;