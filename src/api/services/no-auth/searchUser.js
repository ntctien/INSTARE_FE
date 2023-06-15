import appApi from "~/api/base";

const searchUser = (search) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/no-auth/searchUser', {
                params: {
                    search
                }
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default searchUser;