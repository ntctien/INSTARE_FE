import appApi from "~/api/base";

const removeAva = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .delete("/user/removeAva", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default removeAva;