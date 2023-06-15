import dayjs from "dayjs";

const getDateString = (date) => {
    const convertedDate = dayjs(date);
    const dayDiffFromNow = dayjs().diff(convertedDate, "day");
    if (dayDiffFromNow < 1) return convertedDate.format("HH:mm");
    else if (dayDiffFromNow === 1) return `${dayDiffFromNow} day`;
    else if (dayDiffFromNow < 7) return `${dayDiffFromNow} days`;
    const weekDiff = dayjs().diff(convertedDate, "week");
    return `${weekDiff} week${weekDiff > 1 ? "s" : ""}`;
};

export default getDateString;