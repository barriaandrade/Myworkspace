import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
        {id: 1, texto: 'tarea 1'},
        {id: 2, texto: 'tarea 2'},
        {id: 3, texto: 'tarea 3'},
    ]

    const [lista, setLista] = useState(estadoInicial);
    

    const  agregarElemento = () => {
        console.log('click');
        setLista([
            ...lista,
            {id: 4, texto: 'tarea 4'}
        ])
    }


    // const arrayUno =['Chile', 'Argentina']
    // const arrayDos =['Peru', 'Mexico']

    // const arrayUnidos =[...arrayUno, ...arrayDos]


    return (
        <div>
            <h2>Listas</h2>
            {
                //Cada elemento dentro del array es pasado como argumento por una funcion dentro del metodo map
                //item es el elemento que esta procesando
                //index es el ID y pasa al key
                lista.map( (item, index) => (
                <h4 key={ item.id } >{ item.texto }</h4>
                ))
            }

            <button onClick={() => agregarElemento() }>Agregar</button>
        </div>
    )
}

export default Listas
