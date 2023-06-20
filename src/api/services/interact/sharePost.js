import appApi from "~/api/base";

const sharePost = (token, link, userId) => {
    return new Promise((resolve, reject) => {
        appApi
            .post('/interact/sharePost', { link, userId }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default sharePost;