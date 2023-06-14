import appApi from "~/api/base";

const viewUserProfile = (username) => {
    return new Promise((resolve, reject) => {
        appApi
        .get(`/no-auth/viewUserProfile/${username}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default viewUserProfile;