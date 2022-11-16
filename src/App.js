import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Mascotas from './components/mascotas';
import Detail from './components/detail';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Mascotas/>}/>
          <Route path="/mascotas" element={<Mascotas/>}/>
          <Route path="/mascotas/:mascotaId" element={<Detail/>}/>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
