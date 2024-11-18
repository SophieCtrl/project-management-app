import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projectData, setProjectData] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectData((prevProjectData) => [
      {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        date: dueDateRef.current.value,
      },
      ...prevProjectData,
    ]);

    console.log("Submitted:", {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dueDateRef.current.value,
    });
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar className="" />
      <ProjectForm
        className=""
        data={projectData}
        onSubmit={handleSubmit}
        refs={{
          title: titleRef,
          description: descriptionRef,
          dueDate: dueDateRef,
        }}
      />
    </div>
  );
}

export default App;
