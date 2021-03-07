export const ADD_TO_FAFORITE = "ADD_TO_FAVORITE";
export const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE";


export const addToFavorite = cityId => {
    return {type: ADD_TO_FAFORITE, cityId}
};

export const removeToFavorite = cityId => {
    return {type: REMOVE_TO_FAVORITE, cityId}
};