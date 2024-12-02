import { useAuthContext } from "../context/AuthContext"

export default function LoginPage() {

const {state} = useAuthContext();
  return (
    <>
        <h3>Bienvenidos a la Página</h3>
    </>
  )
}
