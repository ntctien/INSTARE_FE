import appApi from "~/api/base";

const dislikePost = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .delete(`/interact/dislikePost/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default dislikePost;