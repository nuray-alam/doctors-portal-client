import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/appointment' element={<Appointment></Appointment>} />
      </Routes>
    </div>
  );
}

export default App;
