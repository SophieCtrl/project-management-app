import notePad from "../assets/no-projects.png";

const StartScreen = ({ onAdd }) => {
  return (
    <div className="flex flex-col justify-center items-center w-9/12 ml-16 px-6 text-sky-900">
      <img src={notePad} alt="note pad" className="w-20 mb-8" />
      <p className="text-xl font-bold mb-4">No Project Selected</p>
      <p>Select a project or get started with a new one.</p>
      <button
        className="text-white border bg-cyan-600 border-cyan-600 rounded-md py-2 px-4 mt-8"
        onClick={onAdd}
      >
        Create new project
      </button>
    </div>
  );
};

export default StartScreen;
