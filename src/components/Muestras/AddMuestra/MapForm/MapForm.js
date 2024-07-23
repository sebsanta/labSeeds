import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from '@rneui/themed';
import * as Location from 'expo-location';
import { Modal } from "../../../Shared/Modal";
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps'
import Toast from 'react-native-toast-message';
import { styles } from './MapForm.styles';



export function MapForm(props) {
    const {show, close, formik} = props;
    const [location, setLocation] = useState({
        latitude:0.001,
        longitude:0.001,
        latitudeDelta:0.001,
        longitudeDelta:0.001, 
    });

    useEffect(() => {
        (async ()=> {
            const { status } = await Location.requestForegroundPermissionsAsync();
            
            if(status !== "granted"){
                Toast.show({
                    type: "info",
                    position:"bottom",
                    text1:"Tienes que activar la localización de maps para la app"
                });
                return;
            }

            const locationTemp = await Location.getCurrentPositionAsync({});
            //agregamos los parámetros de la latitud y longitud para los state
            setLocation({
                latitude:locationTemp.coords.latitude,
                longitude:locationTemp.coords.longitude,
                latitudeDelta:0.001,
                longitudeDelta:0.001, 
            })
        })();
    },[]);

    const saveLocation = () => {
        formik.setFieldValue("location", location);
        close();
    }

  return (
    <Modal show={show} close={close}>
     
        <MapView 
            provider={PROVIDER_GOOGLE}
            initialRegion={location} 
            showsUserLocation={true} 
            style={{
                //flex:1,
                width: Dimensions.get("window").width,
                height: 580,
            }}
           // onRegionChange={(locationTemp)=> setLocation(locationTemp)}
            >
        </MapView>
        <View style={styles.mapActions}>
            <Button 
                title="Guardar" 
                containerStyle={styles.btnMapContainerSave} 
                buttonStyle={styles.btnMapSave}
                onPress={saveLocation}
            />
            <Button 
                title="Cerrar"
                containerStyle={styles.btnMapContainerClose}
                buttonStyle={styles.btnMapClose}
                onPress={close}
            />
        </View>

    </Modal>
  )
}