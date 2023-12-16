import appApi from "~/api/base";

const deletePost = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .delete(`/post/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default deletePost;