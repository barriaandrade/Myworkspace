import React, {useState} from 'react'

const Formulario = () => {

    const[fruta, setFruta] = useState('');
    const[descripcion, setDescripcion] = useState('');
    const [lista, setLista] = useState([]);

    const guardarDatos = (e) => {
        e.preventDefault();
        

        if(!fruta.trim()){
            console.log('esta vacio fruta');
            return;
        }

        if(!descripcion.trim()){
            console.log('esta vacio descripcion');
            return;
        }

        console.log('procesando datos...' + fruta + descripcion)
        
        setLista([
            ...lista,
            {nombre: fruta, descripcion: descripcion}
        ]);


        e.target.reset();
        setFruta('');
        setDescripcion('');
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos }>
                <input
                     type="text"
                     placeholder="ingrese Fruta"
                     className="form-control mb-2"
                     onChange={ (e) => setFruta(e.target.value) }
                />
                <input
                     type="text"
                     placeholder="ingrese Descripcion"
                     className="form-control mb-2"
                     onChange={ (e) => setDescripcion(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <hr />
            <h2>Lista</h2>
            <ul>
            {
                //Cada elemento dentro del array es pasado como argumento por una funcion dentro del metodo map
                //item es el elemento que esta procesando
                //index es el ID y pasa al key
                lista.map( (item, index) => (
                <li key={ index } >{ item.nombre } { item.descripcion }</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Formulario
