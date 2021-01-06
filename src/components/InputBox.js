import React from 'react';
import { StyleSheet} from 'react-native';
import {Layout,Input} from "@ui-kitten/components";

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const InputBox = ({placeholder}) => {

    const primaryInputState = useInputState();

    return (
        <Layout>
            <Input
                style={styles.input}
                status='primary'
                placeholder={placeholder}
                {...primaryInputState}
            />
        </Layout>
    );
}

export default InputBox;

const styles = StyleSheet.create({
    input: {
        flex: 1,
        margin: 2,
    },
});


