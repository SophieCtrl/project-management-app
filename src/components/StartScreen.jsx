import notePad from "../assets/no-projects.png";
import Button from "./Button";

const StartScreen = ({ onAdd }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-sm:text-sm w-9/12 px-6 text-sky-900">
      <img src={notePad} alt="note pad" className="w-20 max-sm:w-14 mb-8" />
      <p className="text-xl max-sm:text-base font-bold mb-4">
        No Project Selected
      </p>
      <p className="mb-8">Select a project or get started with a new one.</p>
      <Button onClick={onAdd}>Create new project</Button>
    </div>
  );
};

export default StartScreen;
