import React from 'react'
import {Animated, Dimensions} from 'react-native'

/**
 * Gestions des animations de l'application
 */
export default class SpringView extends React.Component {

    /**
     * Constructeur des animations
     * @param props
     */
    constructor(props) {
        super(props);
        const {width} = Dimensions.get('window'); //Récupération de la largeur de l'écran
        this.state = {
            pan: new Animated.ValueXY({x: width, y: 0}) // Animation sur 2 Dimensions
        }
    }

    /**
     * Fonction lorsque le composant est installé
     */
    componentDidMount() {
        Animated.sequence([
            Animated.delay(this.props.delay), // Animation delay
            Animated.spring(                  // Animation
                this.state.pan,
                {
                    toValue: {x: 0, y: 0},
                    useNativeDriver: true
                })
        ]).start()
    }

    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: this.state.pan.getTranslateTransform()
                }}>
                {this.props.children}
            </Animated.View>
        )
    }

}