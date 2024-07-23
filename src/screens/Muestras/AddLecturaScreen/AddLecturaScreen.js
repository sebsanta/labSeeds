import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Input, InputNumber } from '@rneui/base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from "react-native-picker-select";
import { getAuth } from 'firebase/auth';
import { v4 as uuid } from 'uuid';
import { doc, setDoc, query, collection, where, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../utils'
import { initialValues, validationSchema } from './AddLecturaScreen.data';
import { useFormik} from 'formik';
import { map, mean } from 'lodash';
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message';
import { styles } from './AddLecturaScreen.styles'
import { update } from 'firebase/database';

export function AddLecturaScreen(props) {
    
    const {route} = props;
    const navigation = useNavigation();
    const[pikers, setPickers] = useState("");
    const [ppm, setPpm] = useState('');
    const valorppm = {
       ppm:Number(ppm)
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            //console.log(formValue);
            try {
                const auth = getAuth();
                const idDoc = uuid();
                const newData = formValue;
                newData.id = idDoc;
                newData.idLectura = route.params.idLocacion;
                newData.idUser = auth.currentUser.uid;
                newData.avatar = auth.currentUser.photoURL;
                newData.createdAt = new Date();

                await setDoc(doc(db, 'nuevaLectura', idDoc), newData);
                await updateLocacion();
                navigation.goBack();
            } catch (error) {
                //console.log(error)
                Toast.show({
                    type: "error", 
                    position: "bottom",
                    text1:"Error al enviar nueva lectura"
                });
            }
        }
    });

    const updateLocacion = async () => {
        const q = query(collection(db, 'nuevaLectura'), where("idLectura","==",route.params.idLocacion));

        onSnapshot(q, async (snapshot) => {
            const nuevaLectura = snapshot.docs;
            console.log(nuevaLectura);
            const arrayPpm = map(nuevaLectura, (lectura)=> lectura.data().ppm);
            console.log(arrayPpm);
            const media = mean(arrayPpm);
            const lecturaRef = doc(db, "Locaciones", route.params.idLocacion);

            await updateDoc(lecturaRef,{
                ppmMedia: media
            });
           // navigation.goBack();
        })
    }
    

  return (
    <KeyboardAwareScrollView>
    <View style={styles.content}>
        <View>
        <Text style={styles.titulo}>Agregar nueva lectura</Text>
            <Input 
                placeholder='Título'
                onChangeText={(text) => formik.setFieldValue("title", text)}
                errorMessage={formik.errors.title}
            />
            <Input 
                placeholder='Descripción nueva lectura' 
                multiline 
                inputContainerStyle={styles.comment}
                onChangeText={(text) => formik.setFieldValue("comment", text)}
                errorMessage={formik.errors.comment}
            />
            <Input
                placeholder='PPM'
                keyboardType='numeric'
                type="number"
                onChangeText={(value) => (formik.setFieldValue("ppm",parseInt(value)))}
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
        </View>
        <Button 
            title="Enviar nueva lectura" 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
    </KeyboardAwareScrollView>
  )
}