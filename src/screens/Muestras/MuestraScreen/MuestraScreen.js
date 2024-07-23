import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { LoadingModal } from "../../../components/Shared";
import { ListMuestra } from "../../../components/Muestras";
import { screen, db } from "../../../utils";
import { styles } from './MuestraScreen.styles';


export function MuestraScreen(props){
    const { navigation } = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [locaciones, setLocaciones] = useState(null);
    const [locacion, setLocacion] = useState(null);


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user);
        })
    },[]);


    //trae la colección de muestras de firebase
    useEffect(() => {
        const q = query(
            collection(db, "Locaciones"),
            orderBy("createdAt", "desc")
            );
    //guarda en una lista el listado de muestras
        onSnapshot(q, (snapshot) => {
           // console.log(snapshot.docs);
            setLocaciones(snapshot.docs);

        })
    },[]);

    const goToAddMuestra = () => {
        //cuando se navega de un stack a otro objeto del mismo stack se usa esta forma.
        navigation.navigate(screen.muestra.addMuestra);

        //cuando se navega de un stack a otro stack se usa esta forma.
        //navigation.navigate(screen.account.tab,{screen: screen.account.account})
    };
    return(
        <View style={styles.content}>
            {!locaciones ? (
                    <LoadingModal show text="Cargando"/>
                ):(
                    <ListMuestra locaciones={locaciones} />
                )}

           
            {currentUser && 
                  <Button 
                  title="Ingresar nueva muestra +" 
                  containerStyle={styles.btnContainer}
                  buttonStyle={styles.btn}
                  onPress={goToAddMuestra}
              />
            }
        </View>
    );
}