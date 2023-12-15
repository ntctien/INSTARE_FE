import appApi from "~/api/base";

const resolveReport = (token, id, violated, reason) => {
    return new Promise((resolve, reject) => {
        appApi
            .put(`/report/${id}`, { violated, reason }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default resolveReport;