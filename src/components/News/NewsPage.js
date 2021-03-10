import React from "react"
import {Layout, List, Text} from "@ui-kitten/components";
import {View} from "react-native";
import Header from "../Header";
import {actusApi} from "../../api/ActualiteApi";
import fakeActuApi from "../../api/FakeActuApi.json";
import CardNews from "./CardNews";
import AnimatedView from '../Animations/AnimatedView'

/**
 * Page bonus sur les actualités en France
 * @param navigation
 */
export default class NewsPage extends React.Component {

    /**
     * Constructeur de la page
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    /**
     * Fonction lorsque le composant est installé
     **/
    async componentDidMount() {
        const {data} = await actusApi();
        if (data !== undefined) {
            this.setState({
                news: data['data'].reverse().slice(0, 7) // Retourne la liste et on prend les 7 dernières actus
            });
        } else {
            this.setState({
                news: fakeActuApi['data'].reverse().slice(0, 7)
            })
        }
    }

    /**
     *  Fonction qui affiche la carte de l'actualité et le delay grâce à l'index
     * @param item => Actualités
     * @param index => numéro de la liste
     */
    renderItems({item, index}) {
        return <AnimatedView delay={index * 50} key={index}><View
            style={{marginBottom: 15}}><CardNews
            item={item}/></View></AnimatedView>
    }

    /**
     *  Fonction pour afficher un message en cas de manque d'actualités
     */
    renderNews() {
        if (this.state.news.length > 0) {
            return <List
                style={{padding: 15}}
                data={this.state.news}
                renderItem={this.renderItems}
            />
        } else {
            return <Text style={{padding: 15, textAlign: 'center'}}>Pas de news pour le moment.</Text>
        }
    }

    /** Retour pour la vue **/
    render() {
        return (<Layout style={{flex: 1}}>

            {/** Navigation envoyée au header pour le retour **/}
            <Header title={'iWeather'}/>

            {/** Liste des actualités **/}
            <Layout level={'2'} style={{flex: 1}}>
                {this.renderNews()}
            </Layout>

        </Layout>)
    }

};
