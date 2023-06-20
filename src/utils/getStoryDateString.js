const dayjs = require("dayjs")

const getStoryDateString = (date) => {
    const convertedDate = dayjs(date);
    const minuteDiff = dayjs().diff(convertedDate, "minute")
    if (minuteDiff < 1) return "Now";
    else if (dayjs().diff(convertedDate, "hour") < 1) return `${minuteDiff}m`;
    return `${dayjs().diff(convertedDate, "hour")}h`
}

export default getStoryDateString;