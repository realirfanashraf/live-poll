import { useState, useContext } from 'react';
import { PollContext } from '../context/PollContext';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const { polls, setPolls } = useContext(PollContext);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.slice();
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoll = { id: polls.length + 1, question, options, votes: {} };
    setPolls([...polls, newPoll]);
  };

  return (
    <div>
      <h2>Create Poll</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={handleAddOption}>Add Option</button>
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
