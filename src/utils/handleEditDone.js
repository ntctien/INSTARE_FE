import domtoimage from "dom-to-image";
import getPreserveQualitySettings from "./getPreserveQualitySettings";

const handleEditDone = (mediaRef, imageRef, fileList, currentSlide, setFileList, setCurrFeature) => {
    const media = mediaRef.current;
    const image = imageRef.current;
    if (!media || !image) return;
    domtoimage
        .toJpeg(media, getPreserveQualitySettings(image, media))
        .then((url) => {
            let temp = fileList;
            temp[currentSlide].url = url;
            setFileList(temp);
            setCurrFeature("edit");
        })
        .catch((error) => {
            console.error(error);
        });
}

export default handleEditDone;