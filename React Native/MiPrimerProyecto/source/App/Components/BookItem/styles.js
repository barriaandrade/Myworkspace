import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        backgroundColor: '#bfbfbf',
        padding: 10,
        justifyContent: 'center',
        borderRadius:10,
        borderWidth: 0,
        width: '100%'
    }, onPressViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#d96465',
        padding: 10,
        justifyContent: 'center',
        borderRadius:10,
        borderWidth: 0,
        width: '100%'
    },
    content: {
        marginLeft: 10
    },    
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#8b1212',
        elevation: 10,
        textShadowRadius: 0.1,
        textShadowColor: '#6c6c6c',
        textShadowOffset: {
            width: 0.5,
            height: 0.5,
        },
    },onPressTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        elevation: 10,
        textShadowRadius: 0.1,
        textShadowColor: '#6c6c6c',
        textShadowOffset: {
            width: 0.5,
            height: 0.5,
        },
    },
    subtitle: {
        fontSize: 13,
        fontStyle: 'italic',
    },
    textContent: {
        marginTop: 10,
        flexWrap: "wrap",
        width: 210,
        fontSize: 13,
    },
    image: {
        height: 110,
        width: 100,
        alignContent:'flex-end',
        padding: 1,
        borderRadius:5,
    },
});

export default styles;