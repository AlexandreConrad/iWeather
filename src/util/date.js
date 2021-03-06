import moment from "moment";
import "moment/locale/fr"

export const toHoursMinute = date => {
    return moment(date).format("H:mm")
};

export const toHours = date => {
    return moment(date).format("H")
};

export const toDay = date => {
    return moment(date).locale("fr").format("dddd")
};