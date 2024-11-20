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

  console.log("Rendering ProjectDetails, tasks:", tasks);

  return (
    <div className="w-9/12 ml-16 max-sm:ml-6 py-16 max-sm:py-8 px-6 text-sky-900">
      <section id="project">
        <div className="flex justify-between">
          <h1 className="text-2xl max-sm:text-base font-bold">
            {project.title}
          </h1>
          <button
            className="max-sm:text-xs text-cyan-600 mr-6"
            onClick={() => onDelete(project)}
          >
            Delete Project
          </button>
        </div>
        <p className="text-gray-400 mb-6 text-sm max-sm:text-xs mt-4">
          Due date: {project.date}
        </p>
        <p className="max-sm:text-sm mb-4">{project.description}</p>
      </section>
      <hr className="my-6 border text-gray-400" />
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
