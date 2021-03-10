import React, {useEffect} from "react"
import {Image, View, Dimensions} from "react-native";
import {Layout, Text} from "@ui-kitten/components";
import Header from "../../Header";
import {weatherMars} from "../../../api/NasaApi";
import CardMars from "./CardMars";
import AnimatedView from '../../Animations/AnimatedView'

export default class MarsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount() {
        const {data} = await weatherMars();
        let keys = data['sol_keys']
        let temp = []
        let i = data['sol_keys'].length - 1

        for (let key of keys) {
            temp = [...temp,
                <AnimatedView delay={50 * i--}><CardMars
                    pressure={{max: Math.round(data[key]['PRE']['mx']), min: Math.round(data[key]['PRE']['mn'])}}
                    day={key} key={key}/></AnimatedView>]
        }

        this.setState({
            items: temp.reverse().slice(0, 7)
        })
    }

    render() {
        return (<Layout style={{flex: 1}}>
            <Header title={'iWeather'}/>

            <Layout level={'2'} style={{flex: 1, padding: 15}}>
                <Text>Derniers relevés de la sonde sur Mars :</Text>
                <View>
                    {this.state.items}
                </View>
                <Text style={{fontSize: 12}}>* Les pressions sont affichées en Pascal.</Text>
            </Layout>
        </Layout>)
    }
};