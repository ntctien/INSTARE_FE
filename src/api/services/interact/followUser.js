import appApi from "~/api/base";

const followUser = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .post(`/interact/followUser/${id}`, null, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default followUser;