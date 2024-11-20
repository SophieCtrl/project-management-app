import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails";
import StartScreen from "./components/StartScreen";

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

  const handleCancelAddProject = () => {
    setAdding(false);
    setViewedProject(null);
  };

  const handleViewProject = (index) => {
    setViewedProject(projectData[index]);
    setAdding(false);
  };

  const handleDeleteProject = (project) => {
    const projectIndex = projectData.findIndex(
      (proj) => proj.title === project.title
    );

    setProjectData((prevProjectData) => {
      const updatedData = [...prevProjectData];
      updatedData.splice(projectIndex, 1);
      return updatedData;
    });

    setViewedProject(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dueDateRef.current.value,
    };

    setProjectData((prevProjectData) => {
      const updatedProjectData = [newEntry, ...prevProjectData];
      updatedProjectData.sort((a, b) => new Date(a.date) - new Date(b.date));
      return updatedProjectData;
    });

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";

    setViewedProject(newEntry);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        data={projectData}
        onAdd={handleAddProject}
        onView={handleViewProject}
      />

      {!adding && !viewedProject ? (
        <StartScreen onAdd={handleAddProject} />
      ) : undefined}

      {adding && !viewedProject ? (
        <ProjectForm
          data={projectData}
          onSubmit={handleFormSubmit}
          onCancel={handleCancelAddProject}
          refs={{
            title: titleRef,
            description: descriptionRef,
            dueDate: dueDateRef,
          }}
        />
      ) : undefined}

      {viewedProject && (
        <ProjectDetails
          project={viewedProject}
          onDelete={handleDeleteProject}
        />
      )}
      {!adding && !viewedProject && viewedProject ? (
        <ProjectDetails
          project={projectData[0]}
          onDelete={handleDeleteProject}
        />
      ) : undefined}
    </div>
  );
}

export default App;
