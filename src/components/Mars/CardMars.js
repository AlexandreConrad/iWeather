import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "@ui-kitten/components";

/**
 * Carte de Mars
 */
export default class CardMars extends React.Component {

    /**
     * Constructeur
     */
    constructor(props) {
        super(props);
    }

    /**
     * Vue de l'application
     */
    render() {
        return (<View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
            <View style={{padding: 5}}>
                <View
                    style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12, marginTop: 7, marginRight:5}}>SOL N°</Text>
                    <Text style={{fontSize: 30}}>{this.props.day}</Text>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={style.pressure}>Max. </Text>
                    <Text style={style.pressure}>{this.props.pressure.max}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={style.pressure}>Min. </Text>
                    <Text style={style.pressure}>{this.props.pressure.min}</Text>
                </View>
            </View>
        </View>)
    }

};

const style = StyleSheet.create({
    pressure: {
        fontSize: 14
    }
})