import React, { useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Image } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils"
import { styles } from './ListMuestra.styles';


export function ListMuestra(props) {
    const {locaciones} = props;
    const navigation = useNavigation();
    const goToMuestras = (locaciones) => {
       // console.log(locaciones._id);
        navigation.navigate(screen.muestra.muestra, {id: locaciones.id});
    }

  return (
    <View>
      <FlatList 
          data={locaciones}
          renderItem={(doc) => {
            const locaciones = doc.item.data();
            const createReview = new Date(doc.item.data().createdAt.seconds * 1000);
            return (
                <TouchableOpacity onPress={() => goToMuestras(locaciones)}>
                    <View style={styles.contenido}>
                      <Image 
                          source={{ uri: locaciones.images[0]}} 
                          style={styles.image}
                      />
                        <View>
                            <Text style={styles.region}>Región: {locaciones.region}</Text>
                            <Text style={styles.text}>Comuna: {locaciones.comuna}</Text>
                            <Text style={styles.text}>Dirección: {locaciones.direccion}</Text>
                            <Text style={styles.text}>Descripción: {locaciones.descripcion}</Text>
                            <Text style={styles.text}>Dureza PPM: {locaciones.ppm}</Text>
                            <Text style={styles.text}>Fecha:  {createReview.getDate()}/{createReview.getMonth() + 1}/
                                                                  {createReview.getFullYear()} - {createReview.getHours() < 10 ? "0" : ""}
                                                                  {createReview.getHours()}:{createReview.getMinutes() < 10 ? "0" : ""}
                                                                  {createReview.getMinutes()}</Text> 
                        </View>
                    </View>
                </TouchableOpacity>
            )
          }}
      />
    </View>
  )
}