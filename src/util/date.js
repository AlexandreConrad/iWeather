import moment from "moment";
import "moment/locale/fr"

/** Retourne l'heure et la minute d'une date **/
export const toHoursMinute = date => {
    return moment(date).format("H:mm")
};

/** Retourne l'heure d'une date **/
export const toHours = date => {
    return moment(date).format("H")
};

/** Retourne le jour de la semaine **/
export const toDay = date => {
    return moment(date).locale("fr").format("dddd")
};