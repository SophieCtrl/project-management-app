const Button = ({ children, isInput, ...props }) => {
  return isInput ? (
    <input
      className="max-sm:text-xs text-white border bg-cyan-600 border-cyan-600  rounded-md px-8 py-2 mb-12"
      {...props}
    />
  ) : (
    <button
      className="max-sm:text-xs text-white border bg-cyan-600 border-cyan-600 rounded-md py-2 px-4"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
