import React from 'react';
import { StyleSheet} from 'react-native';
import {Layout,Toggle } from "@ui-kitten/components";

const Switch = () => {

    const [activeChecked, setActiveChecked] = React.useState(true);

    const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
    };

    return (
        <Layout style={styles.container}>
            <Toggle
                style={styles.toggle}
                checked={activeChecked}
                onChange={onActiveCheckedChange}>
                Active
            </Toggle>
        </Layout>
    );
}

export default Switch;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    toggle: {
        margin: 2,
    },
});
