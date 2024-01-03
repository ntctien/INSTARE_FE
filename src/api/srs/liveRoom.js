import { srsApi } from "../base"

const createLiveRoom = async (token) => {
    return await srsApi.post('/live-room/create', null, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
}

const liveRoomApis = { createLiveRoom }

export default liveRoomApis;