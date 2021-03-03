import React from "react";

import {Cloud, Rain, Sun, Thunder} from "../definitions/Svg";

export const getIconForMeteo = weather => {
    switch (weather.main) {
        case "Thunderstorm":
            return <Thunder/>;
        case "Drizzle":
        case "Rain":
            return <Rain/>;
        case "Snow":
            return <Snow/>;
        case "Atmosphere":
        case "Clouds":
            return <Cloud/>;
        default:
            return <Sun/>
    }
};