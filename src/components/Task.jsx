import { forwardRef } from "react";

const Task = forwardRef(({ data, onAdd, onClear }, ref) => {
  return (
    <section id="tasks">
      <h2 className="text-xl max-sm:text-base font-bold mb-4">Tasks</h2>
      <span>
        <input
          type="text"
          ref={ref}
          className="w-6/12 max-sm:text-sm border border-amber-100 bg-amber-100 rounded-md px-2 py-1 mt-1 mb-2 mr-4"
        />
        <button onClick={onAdd} className="max-sm:text-xs text-cyan-600">
          Add Task
        </button>
      </span>
      {data.length > 0 && (
        <div className="w-12/12 max-sm:text-sm border border-amber-100 bg-amber-100 rounded-md py-2 px-4 mt-4 mb-2 mr-4">
          <ul>
            {data.map((task, index) => {
              return (
                <li key={index} className="flex justify-between py-2">
                  <p className="max-sm:text-sm font-bold">{task}</p>
                  <button
                    onClick={() => onClear(index)}
                    className="text-cyan-600 max-sm:text-xs"
                  >
                    Clear
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
});

export default Task;
