import dayjs from "dayjs";

const getMessageDateString = (date) => {
    const convertedDate = dayjs(date);
    const dayDiffFromNow = dayjs().diff(convertedDate, "day");
    if (dayDiffFromNow < 1) return convertedDate.format("HH:mm");
    return convertedDate.format("dddd hh:mm A");
};

export default getMessageDateString;