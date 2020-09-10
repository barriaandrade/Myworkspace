import React from 'react'
import Imagen from './Imagen'

export const Comentario = (props) => {
    return (
        <div className="media mt-5">
            <Imagen imagen={props.imagen}/>
            <div className="media-body">
            <h5 className="mt-0">{props.sujeto}</h5>
            {props.comentario}
            </div>
        </div>
    )
}

export default Comentario
