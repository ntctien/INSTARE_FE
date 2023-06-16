import appApi from "~/api/base";

const enterConversation = (token, userId) => {
    return new Promise((resolve, reject) => {
        appApi
            .post(`/chat/enterConversation/${userId}`, null, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}

export default enterConversation;