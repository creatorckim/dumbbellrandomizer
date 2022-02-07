import { StyleSheet } from "react-native";



const workoutDateStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16, 
        paddingTop: 50, 
        backgroundColor: '#131620', 
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    head: { 
        height: 40, 
        backgroundColor: '#131620',
    },
    text: { 
        textAlign: 'center', 
        fontSize: 17, 
        margin: 3,
        color: '#fff',
    },
    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    dataText: {
        fontSize: 17, 
        color: '#fff',
    }
  });

// const workoutDateStyles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#131620',
//         justifyContent: 'center',
//     },
//     setContainer: {
//         flexDirection: 'row',
//         justifyContent: "space-evenly",
//     },

// })

export default workoutDateStyles;