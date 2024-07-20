
const Polls = () => {
  const polls = [
    'Which is the best JavaScript framework',
    'Who is the best mutant',
    'Boolean?',
    'Truth or dare',
    'Is this a poll?'
  ];

  return (
    <div className="w-full max-w-lg mx-auto text-center bg-blue-100 p-5 rounded-lg">
      <div className="mb-5">
        <button className="bg-blue-600 text-white border-none py-2 px-4 mx-2 rounded hover:bg-blue-700">
          All polls
        </button>
        <button className="bg-blue-600 text-white border-none py-2 px-4 mx-2 rounded hover:bg-blue-700">
          My polls
        </button>
      </div>
      <div className="bg-blue-50 p-3 rounded">
        {polls.map((poll, index) => (
          <div
            className="bg-white text-black py-3 border-b border-blue-200 cursor-pointer hover:bg-gray-100"
            key={index}
          >
            {poll}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Polls;
