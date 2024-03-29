import React from 'react';
import { View, ScrollView } from 'react-native';
import { Image, Button, Text } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils';
import { styles } from './UserGuestScreen.styles';

export function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLoggin = () => {
    navigation.navigate(screen.account.login);
  }

  return (
    <ScrollView centerContent={true} style={styles.content}>
        <Image source={require("../../../../assets/img/agua-suelo.jpeg")} style={styles.image} />
        <Text style={styles.title}>Consulta tu perfil de Seeds-Lab</Text>
        <Text style={styles.parrafo}>¿Has tenido que registrar el crecimiento de tus plantas?. ¿Has registrado los productos que utilizas para su crecimiento, monitoreo y
              calidad?. Utiliza esta aplicación para mantener el registro de tu laboratorio de crecimiento de almácigos de diferentes tipos de plantas y compara su crecimento 
              respecto a otras.
        </Text>
        <View style={styles.contents}>
        <Button 
            containerStyle={styles.container}
            buttonStyle={styles.boton} 
            title="Ver tu perfil" 
            onPress={goToLoggin}
        />
      </View>
    </ScrollView>
  )
}