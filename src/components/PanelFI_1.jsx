function PanelFI_1({ e }) {
  return (
    <div className="h-full grid grid-rows-[77%_1fr] rounded-md flex-shrink-0 w-48 border p-2">
      <div className="px-4">
        <img
          className="transition-all ease-in-out duration-100 hover:translate-x-1 hover:-translate-y-1
          
          h-full w-full"
          src={e.src}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center flex-col">
        <p className="text-sm">{e.text1}</p>
        <p className="font-semibold">{e.text2}</p>
      </div>
    </div>
  );
}

export default PanelFI_1;
