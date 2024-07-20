import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePoll from './components/CreatePoll';
import VotePoll from './components/VotePoll';
import ViewResults from './components/ViewResults';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
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
