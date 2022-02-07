import { StyleSheet } from "react-native";

const exerciseDetailStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 15,
    },
    importantText: {
        color: '#af216e',
        fontSize: 20,
    },
    addSetContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 25,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: 60,
        color: '#af216e',
        fontSize: 20,
        textAlign: 'center',
    },
    addSetButton: {
        backgroundColor: '#af216e',
        borderRadius: 2,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 15,
        padding: 5,
        
    }

})

export default exerciseDetailStyles;