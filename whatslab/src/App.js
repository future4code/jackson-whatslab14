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
flex-direction: row;
position: relative;
top: 40%;

`
const Botao = styled.button`

`

const SectionUser = styled.div`
width: 150px;
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
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid gray;
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
    
    valorMensagem: "",
    mensagens: []
  }

  adicionaMensagem = () => {
    
    const novaMensagem = {
     
      novaMensagem: this.state.valorMensagem
      
    };

    
    const listaMensagem = [...this.state.mensagens, novaMensagem];

    
    this.setState({ mensagens: listaMensagem });
    this.setState({ valorMensagem: "" });
    
  };

  onChangeInputMsg = (event) => {
    
    this.setState({ valorMensagem:event.target.value });
  };

 

  render() {

    console.log(this.state.mensagens)

    const listas = this.state.mensagens.map(() => {
      return (
      <p>{}</p>
      )
    }
    )
    

    return (
      <Principal>
      <SectionUser>
        <ImagemUser src={daniel}/>
        <ImagemUser src={leo}/>
      </SectionUser>
      <SectionMsg>
        {listas}
        
        <EnviarMsg>
        <InputMsg onChange={this.onChangeInputMsg} value={this.state.valorMensagem}/>
        <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
        </EnviarMsg>
        

      </SectionMsg>
      
    </Principal>
      
    );
  }

}

export default App;
