import { useState } from "react";

const useAddText = (onDone) => {
  const [textInputs, setTextInputs] = useState([]);
  const [currText, setCurrText] = useState(null);

  const defaultTextStyle = { font: "Ubuntu", size: 20, color: "#FFFFFF" };

  const handleAddText = () => {
    setTextInputs([...textInputs, defaultTextStyle]);
    setCurrText(textInputs.length);
  };

  const handleDeleteText = (index) => {
    const newInputs = [...textInputs];
    newInputs.splice(index, 1);
    setTextInputs(newInputs);
    setCurrText(null);
  };

  const handleEditText = (property, value) => {
    const temp = [...textInputs];
    temp[currText][property] = value;
    setTextInputs([...temp]);
  };

  const handleDone = () => {
    setCurrText(null);
    onDone();
  };

  const getPickerProps = (picker) => {
    return {
      value:
        currText == null
          ? defaultTextStyle[picker]
          : textInputs[currText] && textInputs[currText][picker],
      onChange: (value) => handleEditText(picker, value),
    };
  };

  return {
    handleAddText,
    handleDeleteText,
    handleEditText,
    handleDone,
    currText,
    setCurrText,
    textInputs,
    getPickerProps,
  };
};

export default useAddText;
