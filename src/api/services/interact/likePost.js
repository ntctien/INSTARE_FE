import appApi from "~/api/base";

const likePost = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .post(`/interact/likePost/${id}`, null, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default likePost;