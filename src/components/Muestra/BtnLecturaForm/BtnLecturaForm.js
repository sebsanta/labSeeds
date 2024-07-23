import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import { Text, Button } from '@rneui/base';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils'
import { styles } from './BtnLecturaForm.styles';
import { auth } from '../../../utils';

export function BtnLecturaForm(props) {

    const { idLocacion } = props;
    const [hasLogged, setHasLogged] = useState(false);
    const navigation = useNavigation();
    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true:false);
        });
    }, []);

    const goToLoggin = () => {
        navigation.navigate(screen.account.tab,{
            screen: screen.account.login,
        })
    };

    const goToAddReview = () => {
        navigation.navigate(screen.muestra.addLecturaScreen,{
            idLocacion
        });
    };
  return (
    <View style={styles.content}>
        {hasLogged ? ( 
            <Button 
                title="Ingresa nueva lectura"
                onPress={goToAddReview}
            />
        ): (
            <Text style={styles.text} onPress={goToLoggin}>
                Para ingresar una lectura asociada a esta locación debes estar registrado.{" "} 
                <Text style={styles.textClick}>Pulsa AQUÍ para iniciar sesión.</Text>
            </Text>
        )} 
    </View>
  )
}