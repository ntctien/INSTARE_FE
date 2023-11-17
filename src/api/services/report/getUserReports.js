import appApi from "~/api/base";

const getUserReports = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/report/users', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getUserReports;