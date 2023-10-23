function ButtonHover({ children, icon1, icon2 }) {
  return (
    <div className="h-10 rounded-md relative text-xl flex flex-row  items-center">
      <button className="flex items-center gap-2">
        <span>{icon1}</span>
        {children}
        <span>{icon2}</span>
      </button>
    </div>
  );
}

export default ButtonHover;
