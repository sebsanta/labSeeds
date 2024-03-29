import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Image } from '@rneui/themed';
import { styles } from './ListMuestra.styles';


export function ListMuestra(props) {
    const {muestras} = props;
    //console.log("asd"+muestras);

    const goToMuestras = (muestra) => {
        console.log(muestras.durezaAgua)
    }

  return (
    <View>
      <FlatList 
          data={muestras}
          renderItem={(doc) => {
            const muestra = doc.item.data();
            return (
                <TouchableOpacity onPress={() => goToMuestras(muestra)}>
                    <View>
                        <View>
                            <Text>{muestra.durezaAgua}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
          }}
      />
    </View>
  )
}