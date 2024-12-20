import './App.css'
import UserPage from './components/UserPage'
// import BasicTypes from './typescript/BasicTypes'
// import ObjectLiterals from './typescript/ObjectLiterals'
// import BasicFunctions from "./typescript/BasicFunctions"
// import Counter from './components/Counter'

// import LoginPage from "./components/LoginPage"
import { AuthProvider } from "./context/AuthContext"

function App() {
  

  return (
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh'>
          {/* <BasicTypes /> */}
          {/* <ObjectLiterals /> */}
          {/* <BasicFunctions/> */}
          {/* <Counter/> */}
          {/* <LoginPage/> */}
          <UserPage />
      </div>
    </AuthProvider>
    
  )
}

export default App
