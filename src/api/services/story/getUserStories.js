import appApi from "~/api/base";

const getUserStories = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .get(`/story/getUserStories/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getUserStories;