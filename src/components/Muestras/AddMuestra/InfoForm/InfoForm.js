import React,{ useState } from 'react';
import { View } from 'react-native';
import { Image, Input , Text, Icon } from '@rneui/themed';
import { MapForm } from "../MapForm";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "./InfoForm.styles";
import { number } from 'yup';

export function InfoForm(props) {

    const {formik} = props;
    const [showMap, setShowMap] = useState(false); 
    const onOpenCloseMap = () => setShowMap(prevState => !prevState);


  return (
      <>
    <View style={styles.content}>
      <Text></Text>
      <Text style={styles.textTitulo}>Formulario muestras</Text>
      <Image 
          source={require("../../../../../assets/img/image_formulario.png")}
          style={styles.imagen}
          containerStyle={styles.imagen}
      />
      <Text></Text>
      <Text style={styles.textTitle}>Datos generales de muestra </Text> 
       <RNPickerSelect
       useNativeAndroidPickerStyle={false} 
                 style={{
                            inputAndroid:{
                            fontSize: 18,
                            color:"#716E6C",
                            height:50,
                            width:365,           
                            marginBottom:15,                 
                            textAlign:"left",
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 8,
                            paddingLeft:8,
                            paddingRight:30
                            },
                            inputIOS: {
                                   color: '#716E6C',
                                   paddingTop: 15,
                                   fontSize: 18,
                                   paddingHorizontal: 10,
                                   paddingBottom: 15,
                                   marginBottom:20,
                                   borderWidth: 1,
                                   borderColor: 'gray',
                                   borderRadius: 8,
                            },
                 }}
                 placeholder={{ label: "Selecciona una región", value: null, color:'#716E6C' }}
                 items={[
                     { label: "I Región de Arica, Parinacota y Tarapacá", value: "I Región de Arica, Parinacota y Tarapacá"},
                     { label: "II Región de Antofagasta", value: "II Región de Antofagasta"},
                     { label: "III Región de Atacama y Coquimbo", value: "III Región de Atacama y Coquimbo"},
                     { label: "IV Región de Valparaíso", value: "IV Región de Valparaíso" },
                     { label: "Metropolitana", value: "Metropolitana"},
                     { label: "V Región de Ohiggins", value: "V Región de Ohiggins"},
                     { label: "VI Región del Maule", value: "VI Región del Maule"},
                     { label: "VII Región de Ñuble y BíoBío", value: "VII Región de Ñuble y BíoBío"},
                     { label: "VIII Región de La Araucanía", value: "VIII Región de La Araucanía"},
                     { label: "IX Región de Los Ríos", value: "IX Región de Los Ríos"},
                     { label: "X Región de Los Lagos", value: "X Región de Los Lagos"},
                     { label: "XI Región de Magallanes", value: "XI Región de Magallanes"},
                 ]}
                 onValueChange={(value) => formik.setFieldValue("region",value)}
       />   
      <Input 
             placeholder='Ingrese comuna'
             onChangeText={(text) => formik.setFieldValue("comuna", text)}
             errorMessage={formik.errors.comuna}
      />
      <Input 
             
             placeholder='Ingrese dirección'
             rightIcon={{
                  type:"material-community",
                  name:"map-marker-radius",
                  color:getColorIconMap(formik),
                  onPress: onOpenCloseMap,
             }}
             onChangeText={(text) => formik.setFieldValue("direccion", text)}
             errorMessage={formik.errors.direccion}
      />
      <Input 
             placeholder='Ingrese dureza en PPM'
             keyboardType='numeric'
             type="number"
             onChangeText={(text) => (formik.setFieldValue("ppm", parseInt(text)))}
             errorMessage={formik.errors.ppm}
      />
       <RNPickerSelect
             useNativeAndroidPickerStyle={false} 
             style={{
                        inputAndroid:{
                        fontSize: 16,
                        color:"#716E6C",
                        height:50,
                        width:365,           
                        marginBottom:15,                 
                        textAlign:"left",
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 8,
                        paddingLeft:8,
                        paddingRight:30
                        },
                        inputIOS: {
                               color: '#716E6C',
                               paddingTop: 15,
                               fontSize: 18,
                               paddingHorizontal: 10,
                               paddingBottom: 15,
                               marginBottom:20,
                               borderWidth: 1,
                               borderColor: 'gray',
                               borderRadius: 8,
                        },
             }}
                 placeholder={{ label: "Selecciona dispositivo de toma de muestra", value: null, color:'gray' }}
                 items={[
                     { label: "Lápiz Xiaomi TDS", value: "Lápiz Xiaomi TDS" },
                     { label: "Lápiz genérico TDS", value: "Lápiz genérico TDS" },
                 ]}
                 onValueChange={(value) => formik.setFieldValue("lapiz",value)}
                 errorMessage={formik.errors.lapiz}
            />  
      <Input 
            placeholder='Ingrese descripción de la muestra' 
            multiline={true}
            inputContainerStyle={styles.textArea}
            onChangeText={(text) => formik.setFieldValue("descripcion", text)}
            errorMessage={formik.errors.descripcion}
      />
    </View>
    <MapForm show={showMap} close={onOpenCloseMap} formik={formik}/>
    </>
  )
}

const getColorIconMap = (formik) => {
       if(formik.errors.location) return "red";
       if(formik.values.location) return "#33A5FF";
       return "#c2c2c2";
}