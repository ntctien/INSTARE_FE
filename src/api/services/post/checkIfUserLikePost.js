import appApi from "~/api/base";

const checkIfUserLikePost = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .get(`/post/checkIfUserLikePost/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default checkIfUserLikePost;