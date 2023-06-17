import appApi from "~/api/base";

const getUserNotification = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/interact/getUserNotification', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getUserNotification;