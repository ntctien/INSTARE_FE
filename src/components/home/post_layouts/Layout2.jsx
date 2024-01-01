import React from "react";

const Layout2 = ({ fileList }) => {
  const containMoreMedia = (index) => index === 3 && fileList.length > 4;

  return (
    <div className="post-layout grid grid-cols-2 grid-rows-2 gap-[6px] px-4 py-3">
      {fileList.map(
        (file, i) =>
          i < 4 && (
            <div
              key={i}
              className={containMoreMedia(i) && "relative"}
            >
              <img
                src={file.url}
                alt="Post media"
                className={`aspect-[4/3] object-cover object-center ${
                  containMoreMedia(i) && "brightness-50"
                }`}
              />
              {containMoreMedia(i) && (
                <p className="absolute-center text-white text-18">{`+${
                  fileList.length - 4
                }`}</p>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default Layout2;
