import appApi from "~/api/base";

const getReport = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .get(`/report/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getReport;