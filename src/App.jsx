import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectData, setProjectData] = useState([]);
  const [adding, setAdding] = useState(false);
  const [viewedProject, setViewedProject] = useState(null);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleAddProject = () => {
    setAdding(true);
    setViewedProject(null);
  };

  const handleViewProject = (index) => {
    setViewedProject(projectData[index]);
    setAdding(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dueDateRef.current.value,
    };

    setProjectData((prevProjectData) => [newEntry, ...prevProjectData]);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        data={projectData}
        onAdd={handleAddProject}
        onView={handleViewProject}
      />
      {adding && (
        <ProjectForm
          data={projectData}
          onSubmit={handleFormSubmit}
          refs={{
            title: titleRef,
            description: descriptionRef,
            dueDate: dueDateRef,
          }}
        />
      )}

      {viewedProject && <ProjectDetails project={viewedProject} />}
    </div>
  );
}

export default App;
