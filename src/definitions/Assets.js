import React from "react";
import SearchIcon from '../../assets/icon.png';
import {Icon} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const Assets = {
    icons: {
        search: SearchIcon,
    },
    StarIcon : (props) => (
        <Icon {...props} name='settings-2-outline'/>
    ),
    darkMode : {value : eva.light, onChange : () => {}},
    text : "default",
};

export default Assets;