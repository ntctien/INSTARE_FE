import React from "react";

const Layout1 = ({ fileList }) => {
  const containMoreMedia = (index) => index === 3 && fileList.length > 4;

  return (
    <div className="post-layout grid grid-cols-2 grid-rows-3 gap-[6px] px-4 py-3">
      {fileList.map(
        (file, i) =>
          i < 4 && (
            <div
              key={i}
              className={`${i === 0 ? "row-span-3" : "overflow-hidden"} ${
                containMoreMedia(i) && "relative"
              }`}
            >
              <img
                src={file.url}
                alt="Post media"
                className={`w-full h-full object-cover object-center ${
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

export default Layout1;
