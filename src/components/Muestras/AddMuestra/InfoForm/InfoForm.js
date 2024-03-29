import React from 'react';
import { View } from 'react-native';
import { Image, Input , Text } from '@rneui/themed';
import { styles } from "./InfoForm.styles";

export function InfoForm(props) {

    const {formik} = props;

  return (
    <View style={styles.content}>
      <Text></Text>
      <Text style={styles.textTitulo}>Formulario de almácigo</Text>
      <Image 
          source={require("../../../../../assets/img/image_formulario.png")}
          style={styles.imagen}
          containerStyle={styles.imagen}
      />
      <Text></Text>
      <Text style={styles.textTitle}>Datos generales de muestra </Text> 
      <Input 
             placeholder='Ingrese número de muestra' 
             keyboardType='numeric'
             onChangeText={(text) => formik.setFieldValue("numeroMuestra", text)}
             errorMessage={formik.errors.numeroMuestra}
      />
      <Input 
             placeholder='Ingrese clasificación de muestra'
             onChangeText={(text) => formik.setFieldValue("clasificacionMuestra", text)}
             errorMessage={formik.errors.clasificacionMuestra}
      />
      <Input 
             placeholder='Ingrese tipo de semilla'
             onChangeText={(text) => formik.setFieldValue("tipoSemilla", text)}
             errorMessage={formik.errors.tipoSemilla}
      />
      <Input 
             placeholder='Ingrese marca de semilla'
             onChangeText={(text) => formik.setFieldValue("marcaSemilla", text)}
             errorMessage={formik.errors.marcaSemilla}
      />
      <Input 
             placeholder='Ingrese proveedor de semilla'
             onChangeText={(text) => formik.setFieldValue("proveedorSemilla", text)}
             errorMessage={formik.errors.proveedorSemilla}
      />
      <Text style={styles.textTitle}>Datos de tipo de sustrato utilizado </Text> 
      <Input 
             placeholder='Ingrese tipo de sustrato'
             onChangeText={(text) => formik.setFieldValue("tipoSustrato", text)}
             errorMessage={formik.errors.tipoSustrato}
      />
      <Input 
             placeholder='Ingrese marca de sustrato'
             onChangeText={(text) => formik.setFieldValue("marcaSustrato", text)}
             errorMessage={formik.errors.marcaSustrato}
      />
      <Input 
             placeholder='Ingrese proveedor de sustrato'
             onChangeText={(text) => formik.setFieldValue("proveedorSustrato", text)}
             errorMessage={formik.errors.proveedorSustrato}
      />
      <Text style={styles.textTitle}>Datos de muestra de agua</Text> 
      <Input 
             placeholder='Ingrese tipo de agua aplicada'
             onChangeText={(text) => formik.setFieldValue("tipoAgua", text)}
             errorMessage={formik.errors.tipoAgua}
      />
      <Input 
            placeholder='Ingrese proveedor de agua'
            onChangeText={(text) => formik.setFieldValue("proveedorAgua", text)}
            errorMessage={formik.errors.proveedorAgua}
      />
      <Input 
            placeholder='Ingrese marca de agua'
            onChangeText={(text) => formik.setFieldValue("marcaAgua", text)}
            errorMessage={formik.errors.marcaAgua}
      />
      <Input 
            placeholder='Ingrese PH del agua' 
            keyboardType='numeric'
            onChangeText={(text) => formik.setFieldValue("phAgua", text)}
            errorMessage={formik.errors.phAgua}
      />
      <Input 
            placeholder='Ingrese dureza de agua' 
            keyboardType='numeric'
            onChangeText={(text) => formik.setFieldValue("durezaAgua", text)}
            errorMessage={formik.errors.durezaAgua}
      />
      <Text style={styles.textTitle}>Datos de tipo de fertilizante utilizado</Text> 
      <Input 
            placeholder='Ingrese tipo de fertilizante'
            onChangeText={(text) => formik.setFieldValue("tipoFertilizante", text)}
            errorMessage={formik.errors.tipoFertilizante}
      />
      <Input 
            placeholder='Ingrese proveedor de fertilizante'
            onChangeText={(text) => formik.setFieldValue("proveedorFertilizante", text)}
            errorMessage={formik.errors.proveedorFertilizante}
      />
      <Input 
            placeholder='Ingrese marca de fertilizante'
            onChangeText={(text) => formik.setFieldValue("marcaFertilizante", text)}
            errorMessage={formik.errors.marcaFertilizante}
      />
      <Text style={styles.textTitle}>Datos de tipo de recipiente </Text> 
      <Input 
            placeholder='Ingrese tipo de recipiente'
            onChangeText={(text) => formik.setFieldValue("tipoRecipiente", text)}
            errorMessage={formik.errors.tipoRecipiente}
      />
      <Input 
            placeholder='Ingrese proveedor de recipiente'
            onChangeText={(text) => formik.setFieldValue("proveedorRecipiente", text)}
            errorMessage={formik.errors.proveedorRecipiente}
      />
      <Input 
            placeholder='Ingrese marca de recipiente'
            onChangeText={(text) => formik.setFieldValue("marcaRecipiente", text)}
            errorMessage={formik.errors.marcaRecipiente}
      />
      <Input 
            placeholder='Ingrese volumen de recipiente CC' 
            keyboardType='numeric'
            onChangeText={(text) => formik.setFieldValue("volumenRecipiente", text)}
            errorMessage={formik.errors.volumenRecipiente}
      />
      <Text style={styles.textTitle}>Datos de tipo de iluminación aplicada </Text> 
      <Input 
            placeholder='Ingrese tipo de iluminación'
            onChangeText={(text) => formik.setFieldValue("tipoIluminacion", text)}
            errorMessage={formik.errors.tipoIluminacion}
      />
      <Input 
            placeholder='Ingrese proveedor de iluminación'
            onChangeText={(text) => formik.setFieldValue("proveedorIluminacion", text)}
            errorMessage={formik.errors.proveedorIluminacion}
      />
      <Input 
            placeholder='Ingrese marca de iluminación'
            onChangeText={(text) => formik.setFieldValue("marcaIluminacion", text)}
            errorMessage={formik.errors.marcaIluminacion}
      />
      <Input 
            placeholder='Ingrese potencia de iluminación W/h' 
            keyboardType='numeric'
            onChangeText={(text) => formik.setFieldValue("potenciaIluminacion", text)}
            errorMessage={formik.errors.potenciaIluminacion}
      />
      <Input 
            placeholder='Ingrese descripción de la muestra' 
            multiline={true}
            inputContainerStyle={styles.textArea}
            onChangeText={(text) => formik.setFieldValue("descripcionMuestra", text)}
            errorMessage={formik.errors.descripcionMuestra}
      />

    </View>
  )
}