
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Login from './Login';
 import Sign from './Sign';
import Home from './Home'
function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login/>}></Route>
 <Route path="/signup" element={<Sign/>}></Route>
 </Routes>
</BrowserRouter>
//<div><Home/></div>
  );
}

export default App;
