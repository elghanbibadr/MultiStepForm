import { AppContextProvider } from "./Store/AppContext"
import StepsTracker from "./Componenet/StepsTracker/StepsTracker"
import PersonalInfo from "./Componenet/StepsContent/PersonalInfo/PersonalInfo"
import Wrraper from "./Componenet/General/Wrraper"
import PaginationBar from "./Componenet/paginationBar/PaginationBar"
function App() {
  
  return (
    <AppContextProvider>
      <Wrraper />
     </AppContextProvider>
  )
}

export default App
