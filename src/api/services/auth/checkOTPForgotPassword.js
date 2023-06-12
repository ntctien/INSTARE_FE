import appApi from "~/api/base";

const checkOTPForgotPassword = (email, otp) => {
    return new Promise((resolve, reject) => {
        appApi
        .post('/auth/checkOTPForgotPassword', { email, otp })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default checkOTPForgotPassword;