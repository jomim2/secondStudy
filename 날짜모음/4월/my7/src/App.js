import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './com/Navbar';
import Guestbook from './pages/Guestbook';
import './style/main.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='guestbook' element={<Guestbook/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
