import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content:{
        marginHorizontal: 30,
        //backgroundColor:"#EAECEE"
    },
    image:{
        resizeMode: "contain",
        height:400,
        width:"100%",
        marginBottom:20,
        borderRadius:10
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        marginBottom:10,
        textAlign: "center",
    },
    parrafo:{
        color: "#646464",
        textAlign:"center",
        marginBottom:5,
    },
    contents:{
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        marginTop:20,
        width: "90%", 
    },
    boton:{
        backgroundColor:"#33A5FF",
        borderRadius:10
    }
});