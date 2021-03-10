import React from 'react'
import {Animated} from 'react-native'

export default class SpringView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.value({x: 200, y: 0})
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.pan,
            {
                toValue: {x: 0, y: 0},
                duration: 3000
            }
        ).start()
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