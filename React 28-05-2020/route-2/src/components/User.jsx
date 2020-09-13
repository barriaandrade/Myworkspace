import React,{useEffect}  from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    //recibe parametro de la url
    
    const{id} = useParams();

    const [pueblo, setPueblo] = React.useState([]);

    //una vez que se pinta el componente, se ejecuta el useEffect

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json();
            // console.log(users);
            setPueblo(users);
        }

        obtenerDatos();
    }, [id])



    return (
        <div>
            <h3>{pueblo.name}</h3>
    <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default User
