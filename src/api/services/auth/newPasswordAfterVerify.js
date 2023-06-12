import appApi from "~/api/base";

const newPasswordAfterVerify = (email, password) => {
    return new Promise((resolve, reject) => {
        appApi
            .patch('/auth/newPasswordAfterVerify', { email, password })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default newPasswordAfterVerify;