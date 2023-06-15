import appApi from "~/api/base";

const getAllPosts = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/post/getAllPosts', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getAllPosts;