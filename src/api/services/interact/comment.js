import appApi from "~/api/base";

const comment = (token, id, comment) => {
    return new Promise((resolve, reject) => {
        appApi
            .post(`/interact/comment/${id}`, { comment }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default comment;