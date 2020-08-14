import React from 'react';
import styled from 'styled-components'

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
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid gray;
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
class App extends React.Component {

  state = {
    
    valorInputUsuario: "",
    valorInputFoto: "",
    valorInputFotoPost: "",

  }

  adicionaPost = () => {
    
    const novoPost = {
     
      nomeUsuario: this.state.valorInputUsuario,
      
      foto: this.state.valorInputFoto,
      fotoPost: this.state.inputFotoPost
    };

    
    const novoPosts = [...this.state.posts, novoPost];

    
    this.setState({ posts: novoPosts });
    this.setState({ valorInputPessoa: "" });
    console.log(novoPosts)
  };

  onChangeInputUsuario = (event) => {
    
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFoto = (event) => {
   
    this.setState({ valorInputFoto: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
  
    this.setState({ inputFotoPost: event.target.value });
  };

  

  render() {

    
    
    

    return (
      <Principal>
      <SectionUser>

      </SectionUser>
      <SectionMsg>
        <EnviarMsg>
        <InputMsg/>
        <Botao>Enviar</Botao>
        </EnviarMsg>
        
      </SectionMsg>
      
    </Principal>
      
    );
  }

}

export default App;
