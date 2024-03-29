import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imagen:{
        flex:1,
        resizeMode: "contain",
        alignContent:"center",
        width: "100%",
        height: 250,
        marginTop:20,
        borderRadius:20
    },
    content:{
        marginHorizontal:40,
    },
    textRegister:{
        marginTop:20,
        marginHorizontal:20,
    },
    btnRegister:{
        color:"#33A5FF",
        fontWeight:"bold",
        borderRadius:10
    }
});