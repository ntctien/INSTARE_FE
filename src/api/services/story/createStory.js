import appApi from "~/api/base";

const createStory = (token, file) => {
    let formData = new FormData();
    formData.append("file", file);

    return new Promise((resolve, reject) => {
        appApi
            .post('/story/createStory', formData, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default createStory;