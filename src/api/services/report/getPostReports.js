import appApi from "~/api/base";

const getPostReports = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/report/posts', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getPostReports;