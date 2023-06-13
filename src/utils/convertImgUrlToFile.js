const convertImgUrlToFile = async (imageUrl, name) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], `${name}.png`, { type: 'image/png' });

        return file;
    } catch (error) {
        console.error('Error converting image to file:', error);
    }
};

export default convertImgUrlToFile;