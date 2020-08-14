import React from 'react';
import styled from 'styled-components'
import daniel from './componentes/daniel.jpg'
import leo from './componentes/leo.jpeg'

const Principal = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
justify-content: center;

`
const EnviarMsg = styled.div`
display: flex;
position: fixed;
left: 50%;
top: 77%;

`
const Botao = styled.button`

`

const SectionUser = styled.div`
    width: 250px;
    display: flex;
    margin-bottom: 10px;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    gap: 30px;
`
const SectionMsg = styled.div`
    width: 400px;
    display: flex;
    margin-bottom: 10px;
    height: 80vh;
    flex-direction: column-reverse;
    align-items: left;
    border: 1px solid gray;
    padding-left: 10px;
`
const InputMsg = styled.input`
width: 250px;

`

const ImagemUser = styled.img`
  width:50px;
  height:50px;
  border: 1px solid gray;
`

class App extends React.Component {

  state = {
    
    mensagem: [{
      usuario: "",
      conteudo: ""
    }],
    valorInputUser: "",
    valorInputMsg: ""

  }

    onClickImagem = () => {
      const usuario = ImagemUser.value
      console.log(usuario)
    }


    onChangeUsuario = (event) => {
    this.setState({
      valorInputUser: event.target.value
    })
    } 

    onChangeMensagem = (event) => {
      this.setState({
        valorInputMsg: event.target.value
      })
    }

    adicionaMensagem = () => {
      const novaMensagem = {
        usuario: this.state.valorInputUser + ":",
        conteudo: this.state.valorInputMsg
      }
      const novoArrayMsg = [...this.state.mensagem, novaMensagem]
      this.setState({
        mensagem: novoArrayMsg,
        valorInputUser: "",
        valorInputMsg: ""
      })
    }

    render() {
      const listaMensagem = this.state.mensagem.map((msg) => {
        return (
          <div>
            <p>{msg.usuario} {msg.conteudo}</p>
          </div>
        )
      })
    
    
  
        return (
          <Principal>
          
          <SectionUser>
            <ImagemUser value={"Daniel"} onClick={this.onClickImagem} src={daniel}/>
            <ImagemUser value={"Leo"} onClick={this.onClickImagem} src={leo}/>
           
             <input     
                value={this.state.valorInputUser}
                onChange={this.onChangeUsuario}
                placeholder={"Nome:"}
                />          
          </SectionUser>
          
          <SectionMsg>
            {listaMensagem}    
          </SectionMsg>
            
            <EnviarMsg>
              <InputMsg value={this.state.valorInputMsg} onChange={this.onChangeMensagem} placeholder={"Digite uma mensagem"}/>
              <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
            </EnviarMsg>
          
        </Principal>
          
        );
      }
    
    }
    
    export default App;






















  // adicionaMensagem = () => {
    
  //   const novaMensagem = {
     
  //     novaMensagem: this.state.valorMensagem
      
  //   };

    
  //   const listaMensagem = [...this.state.mensagens, novaMensagem];

    
  //   this.setState({ mensagens: listaMensagem });
  //   this.setState({ valorMensagem: "" });
    
  // };

  // onChangeInputMsg = (event) => {
    
  //   this.setState({ valorMensagem:event.target.value });
  // };

 

  // render() {

  //   console.log(this.state.mensagens)

  //   const listas = this.state.mensagens.map((msg) => {
  //     return (
  //     <p>{m}</p>
  //     )
  //   }
  //   )
    

