import appApi from "~/api/base";

const getMe = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/user/getMe', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getMe;