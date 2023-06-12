import appApi from "~/api/base";

const changePassword = (token, oldPass, newPass, confirmPass) => {
    return new Promise((resolve, reject) => {
        appApi
            .patch('/user/changePassword', { oldPass, newPass, confirmPass }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default changePassword;