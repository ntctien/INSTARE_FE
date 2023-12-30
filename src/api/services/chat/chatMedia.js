import appApi from "~/api/base";

const chatMedia = (token, userId, file) => {
    const formData = new FormData();
    formData.append("file", file);
    return new Promise((resolve, reject) => {
        appApi
            .post(`/chat/media/${userId}`, formData, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default chatMedia;