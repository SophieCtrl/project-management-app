const ProjectForm = ({ onSubmit, refs: { title, description, dueDate } }) => {
  return (
    <form className="w-9/12 ml-16 py-16 px-6" onSubmit={onSubmit}>
      <div className="w-10/12 flex justify-end">
        <button className="text-cyan-600 rounded-md px-8 py-2 mr-2 mb-12">
          Cancel
        </button>
        <input
          className="text-white border bg-cyan-600 border-cyan-600  rounded-md px-8 py-2 mb-12"
          type="submit"
          value="Save"
        />
      </div>
      <div className="flex flex-col text-sky-900">
        <label className="mb-1 font-bold" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          ref={title}
          type="text"
          required
          className="w-10/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-2"
        />
        <label className="mb-1 mt-4 font-bold" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          ref={description}
          required
          className="w-10/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-2"
        />
        <label className="mb-1 mt-4 font-bold" htmlFor="date">
          Due Date
        </label>
        <input
          id="date"
          ref={dueDate}
          type="date"
          required
          className="w-10/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-2"
        />
      </div>
    </form>
  );
};

export default ProjectForm;
