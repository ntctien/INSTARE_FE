import React, { useEffect, useState } from "react";
import { Emoji } from "emoji-picker-react";
import emotions from "~/constants/emotions";
import BackModalContainer from "~/components/modal/BackModalContainer";
import SignatureButton from "~/components/buttons/SignatureButton";

const Emotion = ({ emotion, setEmotion, setCurrFeature }) => {
  const [searchValue, setSearchValue] = useState("");
  const [currEmotions, setCurrEmotions] = useState(emotions);
  const [currEmotion, setCurrEmotion] = useState(emotion);

  useEffect(() => {
    if (searchValue === "") setCurrEmotions(emotions);
    else {
      setCurrEmotions(
        emotions.filter((emotion) =>
          emotion.name.includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);

  const handleConfirm = () => {
    setEmotion(currEmotion);
    setCurrFeature("create");
  };

  return (
    <BackModalContainer
      onBack={() => setCurrFeature("create")}
      onCancel={() => setCurrFeature("create")}
    >
      <div className="w-[480px] pt-[12px] px-5">
        <input
          value={searchValue}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
        />
        {/* Emotions */}
        <div className="flex flex-col overflow-y-auto h-[45vh] mt-[22px]">
          <div className="grid grid-cols-3 gap-y-5">
            {currEmotions.map((emotion, i) => (
              <div
                key={i}
                className={`row gap-x-3 cursor-pointer rounded-5 ${
                  currEmotion?.unified === emotion.unified
                    ? "bg-white shadow-lg"
                    : "hover:bg-hover"
                }`}
                onClick={() => setCurrEmotion(emotion)}
              >
                <div
                  className={`w-[35px] aspect-square ${
                    currEmotion?.unified !== emotion.unified && "bg-grey"
                  } rounded-full center emotion-item`}
                >
                  <Emoji
                    emojiStyle="native"
                    unified={emotion.unified}
                    size={20}
                  />
                </div>
                <p className="font-semibold text-15">{emotion.name}</p>
              </div>
            ))}
          </div>
        </div>
        <SignatureButton
          disabled={!currEmotion}
          className="mt-[30px] mb-[15px]"
          onClick={handleConfirm}
        >
          Confirm
        </SignatureButton>
      </div>
    </BackModalContainer>
  );
};

export default Emotion;
