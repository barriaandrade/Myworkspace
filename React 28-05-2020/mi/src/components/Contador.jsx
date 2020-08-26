import React from 'react'

function Contador() {

    const [contador, setContador] = React.useState(0);
    
    // const aumentar = () => {
    //     console.log('click');
    //     setContador(contador + 1);
    // }

    return (
        <div>
            <h2>Contador</h2>
            <h3>nuestro número aumentado: {contador}</h3>
            <h4>
                {
                    //evaluar ? exito : negativa
                    contador > 2 ? 'Es mayor a dos' : 'Es menor a dos'
                }
            </h4>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        </div>
    )
}

export default Contador
