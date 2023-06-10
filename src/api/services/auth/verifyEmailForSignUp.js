import appApi from "~/api/base";

const verifyEmailForSignUp = (email, password, username) => {
    return new Promise((resolve, reject) => {
        appApi
        .post('/auth/verifyEmailForSignUp', { email, password, username })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default verifyEmailForSignUp;