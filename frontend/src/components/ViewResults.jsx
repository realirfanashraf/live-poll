import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PollContext } from '../context/PollContext';

const ViewResults = () => {
  const { pollId } = useParams();
  const { polls } = useContext(PollContext);
  const poll = polls.find((poll) => poll.id === parseInt(pollId));
  const [results, setResults] = useState({});

  useEffect(() => {
    const countVotes = () => {
      const results = poll.options.reduce((acc, option) => {
        acc[option] = 0;
        return acc;
      }, {});

      Object.values(poll.votes).forEach((vote) => {
        results[vote]++;
      });

      setResults(results);
    };

    countVotes();
  }, [poll]);

  return (
    <div>
      <h2>{poll.question}</h2>
      {poll.options.map((option, index) => (
        <div key={index}>
          <span>{option}</span>: <span>{results[option]}</span>
        </div>
      ))}
    </div>
  );
};

export default ViewResults;
