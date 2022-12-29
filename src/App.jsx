import { AppContextProvider } from "./Store/AppContext"
import Button from "./Componenet/General/Button"

function App() {
  
  return (
    <AppContextProvider>
      <Button />
    </AppContextProvider>
  )
}

export default App
