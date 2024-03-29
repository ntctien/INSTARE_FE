import appApi from "~/api/base";

const likePost = (token, id, react) => {
    return new Promise((resolve, reject) => {
        appApi
            .post(`/interact/likePost/${id}?react=${react}`, null, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default likePost;