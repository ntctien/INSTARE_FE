import appApi from "~/api/base";

const uploadAvaOnly = (token, file) => {
    const formData = new FormData();
    formData.append("file", file);
    return new Promise((resolve, reject) => {
        appApi
            .patch('/user/uploadAvaOnly', formData, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default uploadAvaOnly;