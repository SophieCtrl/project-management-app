import { useState } from "react";

const Sidebar = () => {
  const [projects, setProjects] = useState([]);
  const [addProject, setAddProject] = useState(false);

  const handleClick = () => {
    setAddProject((prevAddProject) => !prevAddProject);
  };

  return (
    <nav className="max-w-xs h-screen bg-amber-100 text-sky-900 py-16 px-6">
      <h2 className="font-bold text-xl mb-6">Your Projects</h2>
      <button
        className="px-8 border border-sky-900 rounded-md p-2"
        onClick={handleClick}
      >
        + Add Project
      </button>
      <ul>
        {projects.map((project, index) => {
          <li key={index}>{project}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
