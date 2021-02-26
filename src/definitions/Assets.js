import React from "react";
import SearchIcon from '../../assets/icon.png';
import {Icon} from "@ui-kitten/components";

const Assets = {
    icons: {
        search: SearchIcon,
    },
    SettingsIcon : (props) => (
        <Icon {...props} name='settings-2-outline'/>
    ),
    SearchIcon : (props) => (
        <Icon {...props} name='search'/>
    ),
    globeIcon : (props) => (
        <Icon {...props} name='globe-2-outline'/>
    ),
    PinIcon : (props) => (
        <Icon {...props} name='pin-outline'/>
    ),
    GeoIcon : (props) => (
        <Icon {...props} name='compass-outline'/>
    ),
    HeartIcon : (props) => (
        <Icon {...props} name='heart-outline'/>
    ),
    HeartFull : (props) => (
        <Icon {...props} name='heart'/>
    ),
};

export default Assets;