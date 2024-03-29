import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content:{
        marginHorizontal:10,
        alignItems:"center",
    },
    imagen:{
        flex:1,
        resizeMode: "contain",
        alignContent:"center",
        height:300,
        width:"100%",
        marginTop:10,
        borderRadius:20,
    },
    textTitulo:{
        alignItems:"center",
        fontSize:30,
        fontWeight:"bold",
        alignContent:"center",
        color:"#566573",
        marginTop:20,
    },
    textArea:{
        height:100,
        width:"100%",
        padding:0,
        margin:0
    },
    textTitle:{
        fontSize:25,
        fontWeight:"bold",
        alignContent:"center",
        color:"#424949",
        marginStart:10,
        marginVertical:20
    },

})