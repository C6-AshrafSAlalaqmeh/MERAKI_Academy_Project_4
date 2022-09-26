import "./App.css";
import Navbar from "./components/Navbar";
import {Routes , Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>


      </Routes>
    </div>
  );
}

export default App;
