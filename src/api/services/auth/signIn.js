import appApi from "~/api/base";

const signIn = (emailOrUsername, password) => {
    return new Promise((resolve, reject) => {
        appApi
        .post('/auth/signIn', { emailOrUsername, password })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default signIn;