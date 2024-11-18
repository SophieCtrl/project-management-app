import { useState, useRef } from "react";

const ProjectDetails = ({ project }) => {
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
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 mb-6 text-sm">Due date: {project.date}</p>
        <p className="mb-4">{project.description}</p>
      </section>
      <hr className="my-6 border-2 text-gray-400" />
      <section id="tasks">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        <span>
          <input
            type="text"
            ref={taskRef}
            className="w-6/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-2 mr-4"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </span>
        {tasks.length && (
          <div className="w-12/12 border border-amber-100 bg-amber-100 rounded-md py-2 px-4 mt-4 mb-2 mr-4">
            <ul>
              {tasks.map((task, index) => {
                return (
                  <li key={index} className="py-2 flex justify-between">
                    <p className="font-bold">{task}</p>
                    <button onClick={() => handleClear(index)}>Clear</button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectDetails;
