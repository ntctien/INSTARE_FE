import appApi from "~/api/base";

const readStory = (token, id) => {
    return new Promise((resolve, reject) => {
        appApi
            .post(`/story/readStory/${id}`, null, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default readStory;