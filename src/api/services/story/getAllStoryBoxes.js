import appApi from "~/api/base";

const getAllStoryBoxes = (token) => {
    return new Promise((resolve, reject) => {
        appApi
            .get('/story/getAllStoryBoxes', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default getAllStoryBoxes;