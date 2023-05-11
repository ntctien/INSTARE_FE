import tempImg from "~/assets/temp1.jpg";

const Result = () => {
  return (
    <div className="story">
      <img
        src={tempImg}
        alt="Story"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Result;
