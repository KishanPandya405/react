
import './App.css'
import Login from './Components/login'
import Profile from './Components/profile'
import UserContaxtProvider from './Contaxt/UserContaxtProvider'

function App() {
  
  return (
    <UserContaxtProvider>
      <h1>kishan pandya is hear dont be fear</h1>
      <Login />
      <Profile />
    </UserContaxtProvider>
  )
}

export default App
