import appApi from "~/api/base";

const unfollowUser = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .delete(`/interact/unfollowUser/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default unfollowUser;