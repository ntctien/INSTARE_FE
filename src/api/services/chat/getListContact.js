import appApi from "~/api/base";

const getListContact = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/chat/getListContact', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getListContact;