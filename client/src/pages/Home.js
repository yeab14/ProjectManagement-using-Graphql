import Clients from "../components/Clients";
import CreateClientModal from "../components/CreateClientModal";
import CreateProjectModal from "../components/CreateProjectModal";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <CreateClientModal />
        <CreateProjectModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
