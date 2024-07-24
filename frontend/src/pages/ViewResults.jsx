import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PollContext } from '../context/PollContext';

const ViewResults = () => {
  const { pollId } = useParams();
  const { polls } = useContext(PollContext);
  const poll = polls.find((poll) => poll._id === pollId);
  const [results, setResults] = useState({});

  useEffect(() => {
    if (poll) {
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
    }
  }, [poll]);

  if (!poll) return <div>Poll not found</div>;

  return (
    <div className="w-full max-w-lg mx-auto text-center bg-blue-100 p-5 rounded-lg">
      <h2 className="font-bold text-xl mb-4">{poll.question}</h2>
       <div className="bg-blue-50 p-3 rounded">
        {poll.options.map((option, index) => (
          <div key={index} className="bg-white text-black py-3 border-b border-blue-200">
            <span>{option}</span>: <span>{results[option]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewResults;
