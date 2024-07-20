import { createContext, useState } from 'react';

const PollContext = createContext();

const PollProvider = ({ children }) => {
  const [polls, setPolls] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <PollContext.Provider value={{ polls, setPolls, user, setUser }}>
      {children}
    </PollContext.Provider>
  );
};

export { PollContext, PollProvider };
