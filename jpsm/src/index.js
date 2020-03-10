// 1# IMPORTAR BIBLIOTECAS
// 2# CRIAR COMPONENTES
// 3# MOSTRAR COMPONENTES NA TELA

import React from 'react';
//interface de programação para documentos HTML e XML
import ReactDOM from 'react-dom';
//Importando arquivos de BoobsDetail
import Componente from './Componente';
import 'bootstrap/dist/css/bootstrap.css'

//Passando de Função para class
class App extends  React.Component {  
      
      VetorPlayers = [
            {
                  nome : 'Felipe',
                  pais : 'Espanha',
                  time : 'Barcelona'
                  },
            {
                  nome : 'João',
                  pais : 'China',
                  time : 'SabeOqueLá'
                  },
            {
                  nome : 'Jamil',
                  pais : 'França',
                  time : 'ParisSant'
                  },    
            {
                  nome : 'Arthur',
                  pais : 'Brasil',
                  time : 'Anapolina'
                  }    
      ]


      constructor(props){
            //Busca na clase pai o props
            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.VetorPlayers.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <Componente nome="Felipe Siqueira Franco" VetorPlayers={this.VetorPlayers[this.state.indice]}>
                        </Componente>
                        <br/>

                        <button type="button" className ="btn btn-primary" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
