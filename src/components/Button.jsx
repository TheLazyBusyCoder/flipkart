function Button({ children, icon }) {
  return (
    <div className="h-10 rounded-md relative text-xl flex flex-row  items-center">
      <button className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        {children}
      </button>
    </div>
  );
}

export default Button;
