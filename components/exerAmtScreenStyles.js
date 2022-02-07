import { StyleSheet } from "react-native";

const exerAmtScreenStyles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131620',
    },
    amountText: {
        marginTop: 75,
        color: '#fff',
        fontSize: 15,
    },
    scrollView: {
        width: '100%',
        height:'100%',
        marginTop: 25,
        marginBottom: 100,
    },
    exerciseView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25,
    },
    exerciseText: {
        color: '#fff',
        fontSize: 20,
    },
    actionBarContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#af216e',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        fontSize: 30,
        color: '#fff',
    },
});

export default exerAmtScreenStyles;