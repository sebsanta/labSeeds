import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { v4 as uuid } from "uuid";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { initialValues, validationSchema } from './AddMuestraScreen.data';
import { db } from '../../../utils/firebase'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InfoForm, UploadImagesForm, ImageMuestra } from "../../../components/Muestras/AddMuestra/";
import { styles } from './AddMuestrasScreen.styles';


export function AddMuestrasScreen() {

const navigation = useNavigation();

const formik = useFormik({
  initialValues: initialValues(),
  validationSchema: validationSchema(),
  validateOnChange: false,
  onSubmit: async (formValue) => {
    try {
      const newData = formValue;
      newData.id = uuid()
      newData.createdAt = new Date();

      const myDb = doc(db, "muestras", newData.id);
      await setDoc(myDb,newData);

      navigation.goBack(); 


    } catch (error) {
      console.log(error)
    }
  }
})

  return (
    <KeyboardAwareScrollView>
      {/* <ImageMuestra /> */}
      <View style={styles.content}>
        <InfoForm formik={formik}/>
        <UploadImagesForm formik={formik}/>
          <Button 
              title="Ingresar Muestra"
              buttonStyle={styles.addMuestra}
              onPress={formik.handleSubmit}
              loading={formik.isSubmitting}
          />
      </View>
    </KeyboardAwareScrollView>
  )
}