import MediaInLayout from "./MediaInLayout";

const PostLayout = ({
  mediaList,
  layout = "",
  getMediaContainerClassName,
  imageClassName = "",
}) => {
  const containMoreMedia = (index) => index === 3 && mediaList.length > 4;

  return (
    <div className={`post-layout ${layout}`}>
      {mediaList.map(
        (media, i) =>
          i < 4 && (
            <div
              key={i}
              className={`${getMediaContainerClassName?.(i)} ${
                containMoreMedia(i) && "relative"
              }`}
            >
              <MediaInLayout
                media={media}
                containMoreMedia={containMoreMedia(i)}
                imageClassName={imageClassName}
              />
              {containMoreMedia(i) && (
                <p className="absolute-center text-white text-18">{`+${
                  mediaList.length - 4
                }`}</p>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default PostLayout;
