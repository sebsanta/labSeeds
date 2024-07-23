import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar, ListItem, Avatar ,Icon } from '@rneui/themed';
import { screen } from "../utils/ScreensName"
import { FireSQL } from 'firesql';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//const fireSQL = new FireSQL(firebase.firestore(), {includeId: "id"});

const fireSQL = new FireSQL(firebase.firestore(), {includeId: "id"})

export function SearchScreen(props) {

const { navigation } = props;
//console.log(navigation);
const [search, setSearch] = useState("");
const [locacion, setLocacion] = useState([]);

useEffect(() => {
  if(search){
    fireSQL.query(`SELECT * FROM Locaciones WHERE comuna LIKE '${search}%'`)
    .then((response) => {
       //console.log(response);
       setLocacion(response);
    });
  }
}, [search])

  return (
    <View>
      <SearchBar
        placeholder='Buscar locación'
        onChangeText={(e) => setSearch(e)}
        value={search}
        containerStyle={StyleSheet.searchBar}
      >
      </SearchBar>
      {locacion.length === 0 ? (
          <NotFoundLocaciones />
      ) : (
        <FlatList 
            data={locacion}
            renderItem={(locacion) => <Locaciones locacion={locacion} navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  )
}

function NotFoundLocaciones(){
  return(
    <View style={{ flex:1, alignItems:"center", paddingTop:100}}>
        <Image 
          source={require("../../assets/img/notfound.png")}
          resizeMode='cover'
          style={{width:300, height:300}}
        />
    </View>
    )
}

function Locaciones(props){
    const {locacion, navigation} = props;
    const {id, comuna, direccion,images} = locacion.item;
    //console.log(id,comuna);


    const goToMuestra = () => {
      //console.log(locacion.item.id)
      navigation.navigate(screen.muestra.muestra,{
          id: locacion.item.id
      });
  };

    return(
      <ListItem key={id} bottomDivider
          onPress={() => goToMuestra()}
      >
        <Avatar 
            source={images[0] ? { uri : images[0]} : require("../../assets/img/notfound.png")}
            rounded
            size={65}
        />
        <ListItem.Content>
            <ListItem.Title>{comuna}</ListItem.Title>
            <ListItem.Subtitle>Dirección: {direccion}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
         { /*  // rightIcon ={<Icon type="material-community" name="chevron-right" />}
          //onPress={() => navigation.navigate("muestraStack",{"muestra": {id, comuna}})}
          //navigation.navigate(screen.muestra.muestra, {id: locaciones.id}); */}
     </ListItem>
    )
}

const styles = StyleSheet.create({
  searchBar:{
    marginBottom:20,

  }
})