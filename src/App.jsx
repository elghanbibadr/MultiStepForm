import { AppContextProvider } from "./Store/AppContext"
import Wrraper from "./Componenet/General/Wrraper"

function App() {
  
  return (
    <AppContextProvider>
      <Wrraper />
     </AppContextProvider>
  )
}

export default App
