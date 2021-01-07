import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';

export const MyAppLoading = (props) => {
    const [loading, setLoading] = React.useState(true);
    const [loadingResult, setLoadingResult] = useState({});

    const onTasksFinish = () => {
        setLoading(false);
    };

    const saveTaskResult = (result) => {
        if (result) {
            let obj = {};
            obj[result[0]] = result[1];
            setLoadingResult(obj);
        }
    };

    const createRunnableTask = (task) => {
        return task().then(saveTaskResult);
    };

    const startTasks = () => {
        if (props.tasks) {
            return Promise.all(props.tasks.map(createRunnableTask));
        }
        return Promise.resolve();
    };

    const renderLoadingElement = () => (
        <AppLoading
            startAsync={startTasks}
            onFinish={onTasksFinish}
            onError={console.warn}
        />
    );

    return (
        <React.Fragment>
            {console.log('RENDER LOADING APPELE = ' + loading)}
            {loading ? renderLoadingElement() : props.children(loadingResult)}
            {props.placeholder && props.placeholder({loading})}
        </React.Fragment>
    );
};