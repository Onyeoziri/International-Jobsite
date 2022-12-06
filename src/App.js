import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home, Companies, CareerBuilder, Login, ErrorPage} from './pages';
import { Footer, NavBar } from './components';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Companies' element={<Companies />} />
          <Route path='/CareerBuilder' element={<CareerBuilder />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>

        <Footer/>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
