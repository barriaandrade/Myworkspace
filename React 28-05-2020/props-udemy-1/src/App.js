import React from 'react';
import Saludo from './components/Saludo'
import Comentario from './components/Comentario';
import Chihuahua from './chihuahua.jpg'

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona="Daniel" edad={30} />
      <Saludo persona="Nicolas" edad={14}/>
      <Saludo persona="Pedro" edad={15}/>
      <hr></hr>
      <h3>Caja de comentarios</h3>
      <Comentario imagen={Chihuahua} sujeto="Daniel" comentario="No sé que comentar pero a quí esta"/>
      <Comentario imagen={Chihuahua} sujeto="Nicolas" comentario="No sé que comentar pero a quí esta"/>
    </div>
  );
}

export default App;
