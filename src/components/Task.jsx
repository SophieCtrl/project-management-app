const Task = ({ data, onAdd, onClear }) => {
  <section id="tasks">
    <h2 className="text-xl font-bold mb-4">Tasks</h2>
    <span>
      <input
        type="text"
        ref={taskRef}
        className="w-6/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-2 mr-4"
      />
      <button onClick={onAdd}>Add Task</button>
    </span>
    {data.length && (
      <div className="w-12/12 border border-amber-100 bg-amber-100 rounded-md py-2 px-4 mt-4 mb-2 mr-4">
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index} className="py-2 flex justify-between">
                <p className="font-bold">{task}</p>
                <button onClick={() => onClear(index)}>Clear</button>
              </li>
            );
          })}
        </ul>
      </div>
    )}
  </section>;
};

export default Task;
