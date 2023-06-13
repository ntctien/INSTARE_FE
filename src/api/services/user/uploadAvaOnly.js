import appApi from "~/api/base";

const uploadAvaOnly = (token, username, name, bio) => {
    return new Promise((resolve, reject) => {
        appApi
            .patch('/user/uploadAvaOnly', { username, name, bio }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default uploadAvaOnly;