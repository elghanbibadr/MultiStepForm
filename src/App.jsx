import { AppContextProvider } from "./Store/AppContext"
import Button from "./Componenet/General/Button"
import StepsTracker from "./Componenet/StepsTracker/StepsTracker"

function App() {
  
  return (
    <AppContextProvider>
       <StepsTracker/>
     </AppContextProvider>
  )
}

export default App
