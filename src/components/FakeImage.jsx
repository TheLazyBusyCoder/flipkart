function FakeImage({ bg, imgs }) {
  return (
    <div className={`h-full p-0 w-full ${bg}`}>
      <img src={imgs} className="h-full w-full" alt="" />
    </div>
  );
}

export default FakeImage;
