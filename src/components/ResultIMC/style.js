import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: 'center',
    width:'100%',
   },

   numberImc: {
    fontSize:48,
    color: '#ff0043',
    fontWeight: 'bold'
   },

   info:{
    fontSize:18,
    color: '#ff0043',
    fontWeight: 'bold'
   },

   shareButton: {
      backgroundColor: '#1877f2',
      width: '50%',
      borderRadius:50,
      alignItems: 'center',
      paddingBottom:10,
      paddingTop: 10,
      marginTop:20
   },

   shareTxt: {
      color: '#ffffff',
      fontSize:16,
      fontWeight:'bold'
   },

   shareButtonBox: {
      width: '100%',
      alignItems: 'center',
      marginBottom:10,
   }
})

export default styles