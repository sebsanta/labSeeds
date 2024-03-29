import React, { useState } from 'react'
import { View } from 'react-native';
import { Input, Icon, Button } from '@rneui/base'; 
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { screen } from "../../../utils";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initialValues, validationSchema } from './RegisterForm.data'
import { styles } from './RegisterForm.styles'


export function RegisterForm() {

  const[showPassword, setShowPassword] = useState(false);
  const[showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue)=> {
       try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(
                auth, 
                formValue.email, 
                formValue.password);
                navigation.navigate(screen.account.account); //vuelve en la navegación una vez que se crea un usuario
            //navigation.goBack();
       } catch (error) {
            Toast.show({
                type:"error",
                position:"top",
                text1: "Error al registrarse, inténtelo más tarde"
            })
            //console.log(error)
       }

    }
  });

  const showHiddenPassword = () => setShowPassword(prevState => !prevState);
  const showHiddenRepeatPassword = () => setShowRepeatPassword(prevState1 => !prevState1);

  return (
    <View style={styles.content}>
        <Input 
            placeholder='Correo electrónico' 
            containerStyle={styles.input}
            rightIcon={
                <Icon 
                    type="material-community" 
                    name="at" 
                    iconStyle={styles.icon} 
                   
                />
            }
            onChangeText={(text) => formik.setFieldValue("email", text)}
            errorMessage={formik.errors.email}
        /> 
        <Input 
            placeholder='Contraseña'
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false:true}
            rightIcon={
                <Icon 
                    type="material-community"
                    name={showPassword ? "eye-outline":"eye-off-outline"}
                    iconStyle={styles.icon}
                    onPress={showHiddenPassword}
                />
            }
            onChangeText={(text) => formik.setFieldValue("password",text)}
            errorMessage={formik.errors.password}
        />
         <Input 
            placeholder='Confirmar constraseña'
            containerStyle={styles.input}
            secureTextEntry={showRepeatPassword ? false:true}
            rightIcon={
                <Icon 
                    type="material-community"
                    name={showRepeatPassword ? "eye-outline": "eye-off-outline"}
                    iconStyle={styles.icon}
                    onPress={showHiddenRepeatPassword}
                />
            }
            onChangeText={(text) => formik.setFieldValue("repeatPassword",text)}
            errorMessage={formik.errors.repeatPassword}
        />
        <Button 
            title="Unirse" 
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
  )
}