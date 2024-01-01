import appApi from "~/api/base";

const createPost = (token, files, caption, emotion, tagUserIdList, layout) => {
    let formData = new FormData();
    files.forEach(file => {
        formData.append("files", file);
    });
    formData.append("caption", caption);
    formData.append("emotion", emotion);
    formData.append("tagUserIdList", tagUserIdList);
    formData.append("layout", layout);
    return new Promise((resolve, reject) => {
        appApi
            .post('/post/createPost', formData, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default createPost;