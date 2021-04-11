import React from 'react';
import './App.css';

// function HelloWorld({text,title}){
//   return(
//     <div id="hello">
//       <h3>{title}</h3>
//       <p>{text}</p>
//     </div>
//   );
// }

class HelloWorld extends React.Component {
  state = {
    visible: true
  }

  // ocultar(){
  //   this.setState({visible:false});
  // }

  cambiarEstado = ()=>{
    this.setState({visible:!this.state.visible})
  }

  render() {
    if(this.state.visible){
      return (
        <div id="hello">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          <button onClick={this.cambiarEstado}>OCULTAR</button>
          {/* <button onClick={this.ocultar.bind(this)}>OCULTAR</button> */}
          {/* <button onClick={()=>this.setState({visible:false})}>OCULTAR</button> */}
        </div>
      )
    } else {
      return (
        <div>
          <h3>No existe</h3>
          <button onClick={this.cambiarEstado}>MOSTRAR</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>THIS A COMPONENT: 
      <HelloWorld text="Hola mundo" title="saludo"/> 
      <HelloWorld text="Adios, basura" title="despedida"/> 

    </div>
  );
}

export default App;
