import { AppContextProvider } from "./Store/AppContext"
import Button from "./Componenet/General/Button"

function App() {
  
  return (
    <AppContextProvider>
      <h1>thank you</h1>
      <h2>Personal Info</h2>
      <h3>Your info</h3>
      <h4>Online Services</h4>
      <Button />
    </AppContextProvider>
  )
}

export default App
