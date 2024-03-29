import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { screen, db } from "../../../utils";
import { styles } from './MuestraScreen.styles';


export function MuestraScreen(props){
    const { navigation } = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [muestraLista, setMuestraLista] = useState(null)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user);
        })
    },[]);

    //trae la colección de muestras de firebase
    useEffect(() => {
        const q = query(
            collection(db, "muestras"),
            orderBy("createdAt", "desc")
            );
    
    //guarda en una lista el listado de muestras
        onSnapshot(q, (snapshot) => {
            setMuestraLista(snapshot)
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
            <Text>Estamos en la muestra locaciones</Text>
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