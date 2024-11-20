const Sidebar = ({ data, onAdd, onView }) => {
  return (
    <nav className="w-3/12 bg-amber-100 text-sky-900 py-16 max-sm:py-8 px-6 max-sm:px-4">
      <h2 className="font-bold text-2xl max-sm:text-base mb-6">
        Your Projects
      </h2>
      <button
        className="max-sm:text-xs text-white border bg-cyan-600 border-cyan-600 rounded-md py-2 px-4"
        onClick={onAdd}
      >
        + Add Project
      </button>
      <ul className="max-sm:text-xs font-medium mt-10 ml-2">
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
