import React from "react";
import Image from "react-native-remote-svg";
import {SvgCss} from "react-native-svg";

import ThunderSvg from "../../public/animated/thunder.svg"

export const Thunder = () => {
    return <SvgCss xml={ThunderSvg}/>
};

export const Rain = () => <Image source={require('../../public/animated/rainy-7.svg')}/>;
export const Sun = () => <Image source={require('../../public/animated/day.svg')}/>;
export const Snow = () => <Image source={require('../../public/animated/snowy-6.svg')}/>;
export const Cloud = () => <Image source={require('../../public/animated/cloudy.svg')}/>;