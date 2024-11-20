import { forwardRef } from "react";

const Input = forwardRef(({ isTextArea, label, ...props }, ref) => {
  return (
    <>
      <label className="mb-1 font-bold">{label}</label>
      {isTextArea ? (
        <textarea
          className="w-10/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-4"
          required
          {...props}
          ref={ref}
        />
      ) : (
        <input
          className="w-10/12 px-2 border border-amber-100 bg-amber-100 rounded-md p-1 mt-1 mb-4"
          required
          {...props}
          ref={ref}
        />
      )}
    </>
  );
});

export default Input;
