import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height:'100%',
        bottom:0,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
    },
    form:{
        width: '100%',
        height:'auto',
        marginTop:30,
        padding:10,
    },
    formLabel: {
        color: '#000000',
        fontSize:18,
        paddingLeft:20,
    },
    input: {
        width: '90%',
        height: 40,
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        margin: 12,
        paddingLeft:12,

    },
    buttonCalculator: {
        borderRadius:50,
        alignItems:'center',
        justifyContent: 'center',
        width:'90%',
        backgroundColor: '#ff0043',
        paddingBottom: 14,
        paddingTop: 14,
        marginLeft:12,
        marginTop: 30
    },
    textButtonCalculator:{
        fontSize: 20,
        color:'#ffffff'
    },
    errorMessage:{
        fontSize:18,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft:20
    }
})

export default styles