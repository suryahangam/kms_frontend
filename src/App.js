// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';
// import SignUp from './components/Singup';
import Dashboard from './components/dashboard/Dashboard';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Dashboard /> */}
        <Pages />
      </BrowserRouter>
      {/* <Login />
      <SignUp /> */}
    </div>
  );
}

export default App;
