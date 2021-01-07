import React from "react";

const StyleSearchPage = {
    container: {
        flex: 4,
    },
    header :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop : 90,
    },
    body :{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    title: {
        flex:1,
        marginLeft : 25,
    },
    buttonSetting: {
        width : 50,
        height : 50,
        marginLeft: 50,
    },
    inputBox: {
        display : 'flex',
    },
    buttonLine: {
        flex : 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        marginRight : 50,
        marginLeft : 50,
    },
    firstLineInputBox: {
        margin: 10,
        flexDirection: 'column',
    },
    secondLineInputBox: {
        margin: 10,
        flexDirection: 'row',
        justifyContent : 'space-evenly',
        backgroundColor: 'red',
    },
};

export default StyleSearchPage;