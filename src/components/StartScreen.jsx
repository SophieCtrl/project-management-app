import notePad from "../assets/no-projects.png";

const StartScreen = ({ onAdd }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-sm:text-sm w-9/12 px-6 text-sky-900">
      <img src={notePad} alt="note pad" className="w-20 max-sm:w-14 mb-8" />
      <p className="text-xl max-sm:text-base font-bold mb-4">
        No Project Selected
      </p>
      <p>Select a project or get started with a new one.</p>
      <button
        className="max-sm:text-xs text-white border bg-cyan-600 border-cyan-600 rounded-md py-2 px-4 mt-8"
        onClick={onAdd}
      >
        Create new project
      </button>
    </div>
  );
};

export default StartScreen;
