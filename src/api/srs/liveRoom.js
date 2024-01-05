import { srsApi } from "../base"

const createLiveRoom = async (token) => {
    return await srsApi.post('/live-room/create', null, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const getLiveRooms = async (token) => {
    return await srsApi.get('/live-room/list', {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const liveRoomApis = { createLiveRoom, getLiveRooms }

export default liveRoomApis;