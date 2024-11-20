import { useState, useRef } from "react";
import Task from "./Task";

const ProjectDetails = ({ project, onDelete }) => {
  const taskRef = useRef();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newValue = taskRef.current.value;
    setTasks((prevTasks) => [newValue, ...prevTasks]);
    taskRef.current.value = "";
  };

  const handleClear = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="w-9/12 ml-16 py-16 px-6 text-sky-900">
      <section id="project">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
          <button
            className="text-cyan-600 px-4 py-1 mr-6"
            onClick={() => onDelete(project)}
          >
            Delete Project
          </button>
        </div>
        <p className="text-gray-400 mb-6 text-sm">Due date: {project.date}</p>
        <p className="mb-4">{project.description}</p>
      </section>
      <hr className="my-6 border-2 text-gray-400" />
      <Task
        data={tasks}
        onAdd={handleAddTask}
        onClear={handleClear}
        ref={taskRef}
      />
    </div>
  );
};

export default ProjectDetails;
