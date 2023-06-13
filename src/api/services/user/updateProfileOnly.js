import appApi from "~/api/base";

const updateProfileOnly = (token, username, name, bio) => {
    return new Promise((resolve, reject) => {
        appApi
            .patch('/user/updateProfileOnly', { username, name, bio }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default updateProfileOnly;