import React from 'react'
import {auth} from '../firebase'
import { withRouter} from 'react-router-dom';

const Admin = (props) => {
    
    const [user, setUser] = React.useState(null)

    //algo que debe cargar al momento de pintar la vntana
    React.useEffect(() => {

       if(auth.currentUser){
           console.log("existe un usuario")
           setUser(auth.currentUser);
       }else{
           console.log("no existe un usuario")
           props.history.push("/login")
       }

    },[props.history])
    
    return (
        <div>
            <h3>Welcome</h3>
            {
                user && (<h3>{user.email}</h3>)
                    

            }
        </div>
    )
}

export default withRouter(Admin)
