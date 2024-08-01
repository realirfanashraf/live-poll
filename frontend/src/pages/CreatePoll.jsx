import { useState, useContext } from 'react';
import { PollContext } from '../context/PollContext';
import NavBar from '../components/Navbar';
import axios from 'axios'
import { toast } from 'react-toastify';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const { polls, setPolls , user } = useContext(PollContext);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newPoll = { id: polls.length + 1, question, options, votes: {} , createdBy:user.id };
      const response = await axios.post('http://localhost:3000/pollApi/createPoll', { newPoll });
  
      if (response.data.status === 200) {
        setPolls([...polls, newPoll]);
        toast.success(response.data.message)
        setQuestion('');
        setOptions(['']);
      } else {
        console.error('Failed to create poll:', response.data.message);
      }
    } catch (error) {
      console.error('Error creating poll:', error);
    }
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <section className="text-center">
          <div className="w-full max-w-lg mx-auto bg-blue-100 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-5">Create Poll</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="bg-blue-600 text-white border-none py-2 px-4 rounded hover:bg-blue-700"
                >
                  Add Option
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white border-none py-2 px-4 rounded hover:bg-blue-700"
                >
                  Create Poll
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default CreatePoll;
