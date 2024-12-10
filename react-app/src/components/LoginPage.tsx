import { useAuthContext } from "../context/AuthContext"

export default function LoginPage() {

const { statetValue, loginEmailWithPassword, logoutEmailWithPassword } = useAuthContext();
console.log(statetValue, loginEmailWithPassword)

  if (statetValue === 1 ){
    return (
      <>
        <h3>Tu estás logeado</h3>
        <button onClick={() => logoutEmailWithPassword()} className=" p-2 bg-red-500 text-white rounded-xl mx-2">SALIR</button>
      </>
    )
  }

  if (statetValue === 2 ){
    return (
      <>
        <h3>Cerraste la sesión</h3>
        <button onClick={() => loginEmailWithPassword('bjdavilal@uce.edu.ec','PANDA27')} className=" p-2 bg-blue-500 text-white rounded-xl mx-2">INGRESAR</button>
      </>
    )
  }

  return (
    <>
        <h3>Bienvenidos a la Página</h3>
        <h3>Ingresar</h3>
        <button onClick={() => loginEmailWithPassword('bjdavilal@uce.edu.ec','PANDA27')} className=" p-2 bg-blue-500 text-white rounded-xl mx-2">INGRESAR</button>
    </>
  )
}
