import appApi from "~/api/base";

const readNoti = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .patch(`/interact/readNoti/${id}`, null, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default readNoti;