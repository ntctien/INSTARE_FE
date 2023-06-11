export const signIn = ({ token, expiry }) => {
    return {
        type: "SIGN_IN",
        payload: { token, expiry },
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}