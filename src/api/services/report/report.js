import appApi from "~/api/base";

const report = (token, { userId, postId, reason }) => {
    return new Promise((resolve, reject) => {
        appApi
            .post('/report', { userId, postId, reason }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default report;