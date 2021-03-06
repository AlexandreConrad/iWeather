import moment from "moment";

export const toHoursMinute = date => {
    return moment(date).format("H:mm")
};

export const toHours = date => {
    return moment(date).format("H")
};