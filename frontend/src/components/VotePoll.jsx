import { useState } from 'react';


const VotePoll = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = () => {
   
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
