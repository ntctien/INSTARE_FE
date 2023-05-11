import { Link } from "react-router-dom";

const CreateStoryItem = ({ path, background, icon, label }) => {
  return (
    <Link
      to={path}
      style={{
        background: background,
      }}
      className="create-story"
    >
      <img src={icon} alt="Media" />
      <p>{label}</p>
    </Link>
  );
};

export default CreateStoryItem;
