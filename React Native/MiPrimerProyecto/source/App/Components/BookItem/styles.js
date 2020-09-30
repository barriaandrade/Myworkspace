import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: '#F7F9F9',
    },
    image: {
        height: 100,
        width: 100,
        alignContent:'flex-end',
        padding: 10,
        borderRadius:10,
    },
    view: {
        flexDirection: 'row',
        backgroundColor: '#FA8072',
        padding: 10,
        borderRadius:10,
        borderWidth: 0,
        width: 350
    },
    content: {
        marginLeft: 10
        
    },    
    title: {
        fontSize: 15,
    
    },
    subtitle: {
        fontSize: 13,
        fontStyle: 'italic',
    },
    textContent: {
        marginTop: 10,
        flexWrap: "wrap",
        width: 210,
        textAlign: 'justify',
        fontSize: 13,
    }
});

export default styles;