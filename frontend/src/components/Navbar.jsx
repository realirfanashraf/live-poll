import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Website</div>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out mr-4">Home</Link>
          <Link to="/create" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Create Poll</Link>
          <Link to="/profile" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
