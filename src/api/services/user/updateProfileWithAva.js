import appApi from "~/api/base";

const updateProfileWithAva = (token, username, name, bio, file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("name", name);
    formData.append("bio", bio);
    return new Promise((resolve, reject) => {
        appApi
            .patch('/user/updateProfileWithAva', formData, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default updateProfileWithAva;