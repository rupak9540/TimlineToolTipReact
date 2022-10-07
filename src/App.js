import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Advertise from "./buttonpages/Advertise";
import ColorProfile from "./buttonpages/ColorProfile";
import Conceptualize from "./buttonpages/Conceptualize";
import DeliveryTask from "./buttonpages/DeliveryTask";
import Eat from "./buttonpages/Eat";
import Html from "./buttonpages/Html";
import Sketch from "./buttonpages/Sketch";
import SpamLink from "./buttonpages/SpamLink";
import WritetheJs from "./buttonpages/WritetheJs";



import TimeLine1 from './components/TimeLine1';



function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/" element={<TimeLine1/>}/>
        <Route path="/conceptualize" element={<Conceptualize/>}/>
        <Route path="/sketch" element={<Sketch/>}/>
        <Route path="/colorprofiles" element={<ColorProfile/>}/>
        <Route path="/html" element={<Html/>}/>
        <Route path="/writethejs" element={<WritetheJs/>}/>
        <Route path="/advertise" element={<Advertise/>}/>
        <Route path="/spamlink" element={<SpamLink/>}/>
        <Route path="/eat" element={<Eat/>}/>
        <Route path="/deliverytask" element={<DeliveryTask/>}/>
        
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
