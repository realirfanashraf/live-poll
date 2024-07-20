import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PollContext } from '../context/PollContext';

const VotePoll = () => {
  const { pollId } = useParams();
  const { polls, setPolls, user } = useContext(PollContext);
  const poll = polls.find((poll) => poll.id === parseInt(pollId));
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = () => {
    const updatedPolls = polls.map((p) =>
      p.id === poll.id ? { ...p, votes: { ...p.votes, [user.id]: selectedOption } } : p
    );
    setPolls(updatedPolls);
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      {poll.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="option"
            value={option}
            onChange={() => setSelectedOption(option)}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default VotePoll;
