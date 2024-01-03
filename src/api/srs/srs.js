const { srsApi } = require("../base")

const getApiV1Clients = async (token) => {
    return srsApi.get('/srs/apiV1Clients', {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}

const onPublish = async (token, { liveRoomId, clientId }) => {
    return await srsApi.post('/srs/onPublish', { liveRoomId, clientId }, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const srsApis = { getApiV1Clients, onPublish };

export default srsApis;