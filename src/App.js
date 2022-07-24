import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/buyer/login' element={<Login/>}>
          </Route>
          <Route path='/' element={<Home/>} >
          </Route>
        </Routes>
    </div>
  );
}

export default App;
