import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Place from './Pages/Place'
function App() {
  return (
    <div>
      <Router>
          <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/place" element={<Place/>}/>

          </Routes>        
      </Router>

    </div>
  );
}

export default App;
