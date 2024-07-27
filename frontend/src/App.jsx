import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePoll from './pages/CreatePoll';
import VotePoll from './pages/VotePoll';
import ViewResults from './pages/ViewResults';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<PrivateRoute Component={CreatePoll} />} />
        <Route path="/vote/:pollId" element={<PrivateRoute Component={VotePoll} />} />
        <Route path="/poll/:pollId" element={<PrivateRoute Component={ViewResults} />} />
      </Routes>
    </Router>
  );
}

export default App;
