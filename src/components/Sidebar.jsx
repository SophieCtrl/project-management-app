import Button from "./Button";

const Sidebar = ({ data, onAdd, onView }) => {
  return (
    <nav className="w-3/12 bg-amber-100 text-sky-900 py-16 max-sm:py-8 px-6 max-sm:px-4">
      <h2 className="font-bold text-2xl max-sm:text-base mb-6">
        Your Projects
      </h2>
      <Button onClick={onAdd}>+ Add Project</Button>
      <ul className="max-sm:text-xs font-medium mt-10 ml-2">
        {data.map((project, index) => {
          return (
            <li key={index}>
              <button
                className="pb-4 text-cyan-600"
                onClick={() => onView(index)}
              >
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
