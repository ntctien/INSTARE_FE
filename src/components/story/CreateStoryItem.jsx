const CreateStoryItem = ({ onClick, background, icon, label }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: background,
      }}
      className="create-story"
    >
      <img src={icon} alt="Media" />
      <p>{label}</p>
    </div>
  );
};

export default CreateStoryItem;
