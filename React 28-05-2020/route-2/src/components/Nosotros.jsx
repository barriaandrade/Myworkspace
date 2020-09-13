import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';

const Nosotros = () => {



    const [equipo, setEquipo] = React.useState([]);

    //una vez que se pinta el componente, se ejecuta el useEffect

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            const users = await data.json();
            // console.log(users);
            setEquipo(users.civilizations);
        }
        
        obtenerDatos();
    }, [])



    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                    <li key={item.id}>
                        <Link to={`/nosotros/${item.id}`}>
                            {item.name} - {item.expansion}
                        </Link>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
