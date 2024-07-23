import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Icon } from '@rneui/base';
import { map } from 'lodash';
import { Map } from '../../Shared';
import { styles } from './info.styles';

export function Info(props) {
    const {locacion} = props;

    //console.log(locacion);

    const listInfo = 
[
    {
        text: locacion.region,
        iconType: "material-community",
        iconName: "map",
        tipo: "Región"
    },
    {
        text: locacion.comuna,
        iconType: "material-community",
        iconName: "map-marker",
        tipo: "Comuna"
    },
    {
        text: locacion.direccion,
        iconType: "material-community",
        iconName:"home",
        tipo: "Dirección"
    },
    {
        text: locacion.descripcion,
        iconType: "material-community",
        iconName:"comment",
        tipo: "Descripción"
    },
    {
        text: locacion.ppm,
        iconType: "material-community",
        iconName:"poll",
        tipo: "Valor PPM"
    },
  
];


  return (
    <View style={styles.content}>
      <Text style={styles.title}>Información sobre la toma de muestra</Text>
      <Text style={styles.mapa}>Mapa de ubicación de toma de muestra</Text>
      <Map 
        location={locacion.location}
        name={locacion.direccion}
        
      />
      <Text style={styles.desc}>Datos de toma de muestra</Text>
      {map(listInfo, (item, index)=> (
          <ListItem key={index} bottomDivider>
             <Icon 
                type = {item.iconType} 
                name = {item.iconName}
            />
            <ListItem.Content>
                <ListItem.Title>{item.tipo} - {item.text}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
      ))}
    </View>
  )
}