import appApi from "~/api/base";

const viewPost = (id) => {
    return new Promise((resolve, reject) => {
        appApi
        .get(`/no-auth/viewPost/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default viewPost;