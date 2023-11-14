import './App.css';
import Register from './Components/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';

function App() {

  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.withCredentials = true;

  return (
    <div>
      <UserContextProvider>
        <Register />
      </UserContextProvider>
    </div>
  );
}

export default App;
