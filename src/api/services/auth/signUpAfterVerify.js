import appApi from "~/api/base";

const signUpAfterVerify = (email, otp) => {
    return new Promise((resolve, reject) => {
        appApi
        .post('/auth/signUpAfterVerify', { email, otp })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default signUpAfterVerify;