import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navContainer: {
        width: '100%',
        height:'100%',
        backgroundColor: '#000',
        color: '#ffc45d',
      },
      nav: {
        backgroundColor: '#000',
        color: '#ffc45d',
      },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: '#c51032',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addButton: {
        fontSize: 30,
        color: '#000',
      },
      sheetButtons: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
      }
});

export default styles;