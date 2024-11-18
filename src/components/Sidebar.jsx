const Sidebar = ({ data, onAdd, onView }) => {
  return (
    <nav className="w-3/12 bg-amber-100 text-sky-900 py-16 px-6">
      <h2 className="font-bold text-2xl mb-6">Your Projects</h2>
      <button
        className="text-white border bg-cyan-600 border-cyan-600 rounded-md py-2 px-4"
        onClick={onAdd}
      >
        + Add Project
      </button>
      <ul className="font-medium mt-10 ml-2">
        {data.map((project, index) => {
          return (
            <li key={index}>
              <button className="pb-4" onClick={() => onView(index)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
