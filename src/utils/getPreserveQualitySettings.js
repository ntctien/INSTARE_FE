const getPreserveQualitySettings = (image, media) => {
    const scale = image.naturalWidth / media.clientWidth;
    return {
        width: media.clientWidth * scale,
        height: media.clientHeight * scale,
        style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
        },
    }
}

export default getPreserveQualitySettings;