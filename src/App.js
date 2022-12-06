import LoginForm from './components/loginform';
import img from './internatJobs.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
