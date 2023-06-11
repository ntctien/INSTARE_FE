export const signIn = (userInfo) => {
    return {
        type: "SIGN_IN",
        payload: userInfo,
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}