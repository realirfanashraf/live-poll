import { useContext, useEffect, useState } from "react";
import { PollContext } from "../context/PollContext";
import axios from 'axios';
import { Link } from "react-router-dom";

const Polls = () => {
  const { polls, setPolls, user } = useContext(PollContext);
  const [userPolls, setUserPolls] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    console.log(user, "userid is here");
    const fetchPolls = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pollApi/getPolls?userId=${user.id}`);
        if (response.data.status === 200) {
          setPolls(response.data.polls);
          setUserPolls(response.data.userPolls);
          console.log(response.data, "polls is here");
        } else {
          console.error('Failed to fetch polls:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };

    fetchPolls();
  }, [setPolls, user.id]);

  const filteredPolls = filter === 'all' ? polls : userPolls;

  return (
    <>
  
    <div className="w-full max-w-lg mx-auto text-center bg-blue-100 p-5 rounded-lg">
      <div className="mb-5">
        <button
          className={`bg-blue-600 text-white border-none py-2 px-4 mx-2 rounded ${filter === 'all' ? 'hover:bg-blue-700' : 'bg-blue-400'}`}
          onClick={() => setFilter('all')}
        >
          All polls
        </button>
        <button
          className={`bg-blue-600 text-white border-none py-2 px-4 mx-2 rounded ${filter === 'user' ? 'hover:bg-blue-700' : 'bg-blue-400'}`}
          onClick={() => setFilter('user')}
        >
          My polls
        </button>
      </div>
      <div className="bg-blue-50 p-3 rounded">
        {filteredPolls.length > 0 ? (
          filteredPolls.map((poll) => (
            <Link to={`/vote/${poll._id}`} key={poll._id}>
              <div
                className="bg-white text-black py-3 border-b border-blue-200 cursor-pointer hover:bg-gray-100"
              >
                <h3 className="font-bold">{poll.question}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>No polls available.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Polls;
