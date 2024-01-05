const { srsApi } = require("../base")

const getApiV1Clients = async (token) => {
    return srsApi.get('/srs/apiV1Clients', {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}

const onPublish = async (token, { liveRoomId, clientId, name }) => {
    return await srsApi.post('/srs/onPublish', { liveRoomId, clientId, name }, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const onUnpublish = async (token, { liveRoomId }) => {
    return await srsApi.post('/srs/onUnpublish', null, {
        params: { liveRoomId },
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const onPlay = async (token, { liveRoomId, clientId }) => {
    return await srsApi.post('/srs/onPlay', { liveRoomId, clientId }, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const onStop = async (token, { liveRoomId }) => {
    return await srsApi.post('/srs/onStop', null, {
        params: { liveRoomId },
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const getLiveRoomByUsername = async (token, username) => {
    return await srsApi.get(`/live-room/user/${username}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const srsApis = { getApiV1Clients, onPublish, onUnpublish, onPlay, onStop, getLiveRoomByUsername };

export default srsApis;