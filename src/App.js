import './App.css';
import {NavBar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Login, ErrorPage} from './pages';

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
