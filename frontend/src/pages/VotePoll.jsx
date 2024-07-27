import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PollContext } from '../context/PollContext';
import Navbar from '../components/Navbar'
import axios from 'axios'

const VotePoll = () => {
  const { pollId } = useParams();
  const { polls, setPolls, user } = useContext(PollContext);
  const poll = polls.find((poll) => poll._id === pollId);
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = async () => {
    if (!selectedOption) return;

    const updatedPolls = polls.map((p) =>
      p._id === poll._id ? {
        ...p,
        votes: p.votes.some(vote => vote.votedBy === user.id)
          ? p.votes.map(vote => vote.votedBy === user.id ? { ...vote, option: selectedOption } : vote)
          : [...p.votes, { option: selectedOption, votedBy: user.id }]
      } : p
    );

    const votedPoll = updatedPolls.find((p) => p._id === poll._id);

    try {
      const response = await axios.put('http://localhost:3000/pollApi/votePoll', {
        votedPoll,
        userId: user.id,
        selectedOption
      });
      if (response.status === 200) {
        setPolls(updatedPolls);
      }
    } catch (error) {
      console.error("Error while voting:", error);
    }
  };

  if (!poll) return <div>Poll not found</div>;

  return (
    <>

      <Navbar />
      <div className="w-full max-w-lg mx-auto text-center bg-blue-100 p-5 rounded-lg">
        <h2 className="font-bold text-xl mb-4">{poll.question}</h2>
        <div className="bg-blue-50 p-3 rounded">
          {poll.options.map((option, index) => (
            <div key={index} className="bg-white text-black py-3 border-b border-blue-200">
              <input
                type="radio"
                id={`option${index}`}
                name="option"
                value={option}
                onChange={() => setSelectedOption(option)}
                className="mr-2"
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <button
          onClick={handleVote}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Vote
        </button>
      </div>
    </>
  );
};

export default VotePoll;
