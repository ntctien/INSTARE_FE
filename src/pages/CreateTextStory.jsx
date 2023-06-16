import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import ColorPalette from "~/components/story/ColorPalette";
import ContentWrapper from "~/components/story/ContentWrapper";
import LeftBar from "~/components/story/LeftBar";
import MenuBar from "~/components/story/MenuBar";
import Select from "~/components/story/Select";
import SelectCircle from "~/components/story/SelectCircle";
import SizeEditor from "~/components/text_editor/SizeEditor";
import storyBackgroundColors from "~/constants/storyBackgroundColors";
import textColors from "~/constants/textColors";
import SelectFont from "~/components/story/SelectFont";
import convertImgUrlToFile from "~/utils/convertImgUrlToFile";
import { useSelector } from "react-redux";
import createStory from "~/api/services/story/createStory";

const CreateTextStory = () => {
  const { currentUser } = useSelector((state) => state.user);
  const storyRef = useRef(null);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [style, setStyle] = useState({
    fontFamily: "Inter",
    fontSize: 24,
    color: "#FFFFFF",
  });
  const [background, setBackground] = useState(
    "linear-gradient(162.44deg, #B73793 0%, #EDA9DE 100%)"
  );
  const [loading, setLoading] = useState(false);

  const handleAddToStory = () => {
    const story = storyRef.current;
    if (!story) return;
    domtoimage
      .toJpeg(story, { width: story.naturalWidth, height: story.naturalHeight })
      .then(async (url) => {
        setLoading(true);
        const file = await convertImgUrlToFile(url, `story_${currentUser.id}`);
        await createStory(currentUser.token, file)
          .then(({ data }) => {
            console.log(data);
            navigate("/");
          })
          .catch((err) => console.log(err));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <LeftBar>
        <MenuBar
          primaryBtnLabel={"Add to story"}
          onPrimaryBtnClick={handleAddToStory}
          onDiscard={() => navigate("/")}
          primaryBtnLoading={loading}
        >
          <div className="mx-5 create-text-menu flex flex-col gap-y-5">
            <textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your content here..."
              className="h-[27.7vh] focus:outline-none px-[15px] py-5 placeholder:text-white placeholder:opacity-50 resize-none"
            />
            <SelectFont
              value={style.fontFamily}
              onChange={(value) => setStyle({ ...style, fontFamily: value })}
            />
            <div>
              <SizeEditor
                value={style.fontSize}
                onChange={(value) => {
                  setStyle({ ...style, fontSize: value });
                }}
                selectedColor={"#D6D6D6"}
              />
            </div>
            <Select
              value={"Text color"}
              valueStyle={{ fontFamily: "Ubuntu" }}
              prefix={<SelectCircle selected background={style.color} />}
              dropDownBox={
                <ColorPalette
                  colors={textColors}
                  value={style.color}
                  onChange={(value) => setStyle({ ...style, color: value })}
                />
              }
            />
            <Select
              value={"Background color"}
              valueStyle={{ fontFamily: "Ubuntu" }}
              prefix={<SelectCircle selected background={background} />}
              dropDownBox={
                <ColorPalette
                  colors={storyBackgroundColors}
                  value={background}
                  onChange={setBackground}
                />
              }
            />
          </div>
        </MenuBar>
      </LeftBar>
      <ContentWrapper>
        <div className="rounded-10 overflow-hidden">
          <div
            ref={storyRef}
            style={{
              ...style,
              fontSize: style.fontSize + "px",
              background: background,
            }}
            className="h-[80vh] w-[calc(80vh*9/16)] overflow-hidden center"
          >
            <p className="font-medium text-center max-w-[80%] break-words leading-7">
              {content || "Your content will display here"}
            </p>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default CreateTextStory;
