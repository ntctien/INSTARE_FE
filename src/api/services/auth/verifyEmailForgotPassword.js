import appApi from "~/api/base";

const verifyEmailForgotPassword = (email) => {
    return new Promise((resolve, reject) => {
        appApi
            .post('/auth/verifyEmailForgotPassword', { email })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default verifyEmailForgotPassword;