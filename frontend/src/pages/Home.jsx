import NavBar from "../components/Navbar.jsx";
import Polls from "../components/Polls.jsx"

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <section className="text-center">
          <h1 className="text-2xl font-bold mb-5">Welcome to the Polling System</h1>
          <Polls/>
        </section>
      </main>
    </>
  );
};

export default HomePage;
