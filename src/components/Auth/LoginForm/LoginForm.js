import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon, Input, Button } from '@rneui/base'
import { useFormik } from 'formik';
import { useNavigation } from "@react-navigation/native"
import Toast from 'react-native-toast-message';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from "./LoginForm.styles"
import { screen } from "../../../utils"
import { initialValues, validationSchema } from '../LoginForm/LoginForm.data'

export function LoginForm() {

  const navigation = useNavigation();
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const showHiddenPassword = () => setMostrarPassword(prevState => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(
                auth,
                formValue.email,
                formValue.password,
            )
            navigation.navigate(screen.account.account);
        } catch (error) {
            Toast.show({
                type:"error",
                position:"top",
                text1:"Usuario o contraseña incorrecto"
            })
        }
    }
  })

  return (
    <View style={styles.content}>
        <Input 
            placeholder="Correo electrónico" 
            containerStyle={styles.input}
            rightIcon={<Icon 
                            type="material-community"
                            name="at"
                            iconStyle={styles.icon}
                        />}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            errorMessage={formik.errors.email}
        />
        <Input 
            placeholder="Contraseña" 
            containerStyle={styles.input}
            secureTextEntry={mostrarPassword ? false:true}
            rightIcon={<Icon 
                            type="material-community"
                            name={mostrarPassword ? "eye-outline":"eye-off-outline"}
                            iconStyle={styles.icon}
                            onPress={showHiddenPassword}
                        />}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
        />
        <Button 
            title="Iniciar sesión" 
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
  )
}