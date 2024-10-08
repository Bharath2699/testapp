import { BrowserRouter,Routes, Route } from "react-router-dom";
import DesktopView from "./components/DesktopView"
import MobileView from "./components/MobileView"
import './App.css';

const App=()=>{
  return(
      <BrowserRouter>
         <Routes>
             <Route path="/" element={<DesktopView/>}/>
             <Route path="/play" element={<MobileView/>}/>
         </Routes>
      </BrowserRouter>
  )
}

export default App;
