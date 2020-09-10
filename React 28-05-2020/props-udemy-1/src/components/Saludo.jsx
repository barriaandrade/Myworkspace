import React from 'react'

export const Saludo = (props) => {


    return (
        <div>
            <h2>Saludos {props.persona} {props.edad} </h2>
        </div>
    )
}

export default Saludo;
