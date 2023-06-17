import dayjs from "dayjs";

const getMessageDateString = (date) => {
    const convertedDate = dayjs(date);
    const dayDiffFromNow = dayjs().diff(convertedDate, "day");
    if (dayDiffFromNow < 1 && convertedDate.get('date') === dayjs().get('date')) return convertedDate.format("HH:mm");
    if (dayjs().diff(convertedDate, "week") < 1) return convertedDate.format("dddd hh:mm A")
    return convertedDate.format('MMMM D, YYYY hh:mm A');
};

export default getMessageDateString;