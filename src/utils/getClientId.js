import srsApis from "~/api/srs/srs";

const getClientId = async (token) => {
    const { data } = await srsApis.getApiV1Clients(token);
    const { id } = data.clients.reduce(
        (min, current) => (current.alive < min.alive ? current : min),
        data.clients[0]
    );
    return id;
};

export default getClientId