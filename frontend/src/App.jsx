import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePoll from './pages/CreatePoll';
import VotePoll from './pages/VotePoll';
import ViewResults from './pages/ViewResults';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="/vote/:pollId" element={<VotePoll />} />
        <Route path="/results/:pollId" element={<ViewResults />} />
      </Routes>
    </Router>
  );
}

export default App;
