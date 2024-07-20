import React, {  useEffect, useState } from 'react';


const ViewResults = () => {

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
