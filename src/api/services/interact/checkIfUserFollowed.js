import appApi from "~/api/base";

const checkIfUserFollowed = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .get(`/interact/checkIfUserFollowed/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default checkIfUserFollowed;