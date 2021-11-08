import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
