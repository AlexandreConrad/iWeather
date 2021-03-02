export const TURN_LIGHT = "TURN_LIGHT";

export const setLight = light => {
    return {type: TURN_LIGHT, light}
}