import React, {useEffect, useState} from "react"
import {Layout, List, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import Header from "../../Header";
import {actusApi} from "../../../api/ActualiteApi";
import fakeActu from "../../../api/FakeActuApi.json";
import CardActu from "./CardActu";
import AnimatedView from '../../Animations/AnimatedView'

/**
 * Page bonus sur les actualités en France
 * @param navigation
 */
export default class NewsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    async componentDidMount() {
        const {data} = await actusApi();
        if (data !== undefined)
            this.setState({
                news: data.data
            });
    }

    renderNews() {
        if ( this.state.news.length > 0 ) {
            return <List
                style={{padding: 15}}
                data={this.state.data}
                renderItem={({item, index}) => <AnimatedView delay={index * 50} key={index}><View
                    style={{marginBottom: 15}}><CardActu
                    item={item}/></View></AnimatedView>}
            />
        } else {
            return <Text style={{padding: 15, textAlign:'center'}}>Pas de news pour le moment.</Text>
        }
    }

    render() {
        return (<Layout style={{flex: 1}}>

            {/** Navigation envoyée au header pour le retour **/}
            <Header title={'iWeather'}/>

            {/** Liste des actualités **/}
            <Layout level={'2'} style={{flex:1}}>
                {this.renderNews()}
            </Layout>

        </Layout>)
    }

};
