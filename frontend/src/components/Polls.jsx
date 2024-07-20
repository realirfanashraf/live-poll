import { useContext, useEffect } from "react";
import { PollContext } from "../context/PollContext";
import axios from 'axios';

const Polls = () => {
  const { polls, setPolls } = useContext(PollContext);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pollApi/getPolls');
        if (response.data.status === 200) {
          setPolls(response.data.polls);
          console.log(response.data.polls, "polls is here");
        } else {
          console.error('Failed to fetch polls:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };

    fetchPolls();
  }, [setPolls]);

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
        {polls.map((poll) => (
          <div
            className="bg-white text-black py-3 border-b border-blue-200 cursor-pointer hover:bg-gray-100"
            key={poll._id}
          >
            <h3 className="font-bold">{poll.question}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Polls;
