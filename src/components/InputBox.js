import React from 'react';
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
                status='primary'
                placeholder={placeholder}
                {...primaryInputState}
            />
        </Layout>
    );
}

export default InputBox;


