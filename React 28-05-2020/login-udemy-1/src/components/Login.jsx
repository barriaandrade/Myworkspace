import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            //console.log("ingrese Email")
            setError("Ingrese Email")
            return
        }

        if(!pass.trim()){
            //console.log("Ingrese Password")
            setError("Ingrese Password")
            return
        }

        if(pass.length < 6){
            //console.log("Password es mayor que 6")
            setError("Password es menor a 6 caracteres")
            return
        }

        setError(null)
        console.log("pasando todas las validaciones")

    }
    return (
        <div className="mt-5">
            <h3 className="text-center">Acceso o Registro de usuario</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error ? (
                                
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                                
                             ) : null
                        }
                        <input 
                        type="email" 
                        className="form-control mb-2"
                        placeholder="ingrese un email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />
                        
                        <input 
                        type="password" 
                        className="form-control mb-2"
                        placeholder="ingrese un password"
                        onChange={e => setPass(e.target.value)}
                        value={pass}
                        />

                        <button className="btn btn-dark btn-lg btn-block">
                            Registrarse
                        </button>
                        <button className="btn btn-info btn-sm btn-block">
                            ¿Ya tienes cuenta?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
