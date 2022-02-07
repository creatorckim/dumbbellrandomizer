import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navContainer: {
      width: '100%',
      height:'100%',
      backgroundColor: '#131620',
    },
    container: {
      width: '100%',
      height:'100%',
      backgroundColor: '#131620',
      justifyContent: 'center',
      alignItems: 'center',
    },
    noExText: {
      fontSize: 20,
      color: '#fff',
    },
    scrollView: {
      width: '100%',
      height:'100%',
      marginBottom: 100,
    },
    actionBarContainer: {
      position: 'absolute',
      bottom: 0,
      padding: 15,
      width: '100%',
      height: 100,
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
    saveButtonContainer: {
      width: 80,
      height: 50,
      backgroundColor: '#af216e',
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveButton: {
      fontSize: 20,
      color: '#fff',
    },
    actionsheet: {
      backgroundColor: '#131620',
    },
    sheetButtons: {
      width: '100%',
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#131620',
    },
    sheetBtnTO: {
      width: '90%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#515151',
      backgroundColor: '#131620',
      borderBottomWidth: 1,
    },
    buttonText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: "bold",
    },
    calendarButton: {
      marginRight: 15,
    },
});

export default styles;