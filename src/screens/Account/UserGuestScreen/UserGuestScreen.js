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
        <Text style={styles.title}>Consulta tu perfil de QWater</Text>
        <Text style={styles.parrafo}>Registra la calidad del agua mediante esta App. Esto te permite tener la trazabilidad el calidad del agua
        en donde estés pudiendo compararla con la que tomas en la llave. Es importante destacar que estas muestras indican la dureza, presencia de sales 
        concentradas y metales pesados, por lo tanto es importante que tomes precauiciones antes de beber desde alguna vertiente.
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