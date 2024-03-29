import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import Toast from 'react-native-toast-message';
import { useFormik } from 'formik';
import { 
        getAuth, 
        updateEmail, 
        EmailAuthProvider, 
        reauthenticateWithCredential} 
        from 'firebase/auth';
import { initialValues, validationSchema } from './ChangeEmailForm.data'
import { styles } from './ChangeEmailForm.styles';


export function ChangeEmailForm(props) {

    const {onClose, onReload} = props;
    const[showPassword, setShowPassword] = useState(false);
    const onShowPassword = () => setShowPassword((prevState) => !prevState)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,

        //cambiar el correo autenticando la acción con la password
        onSubmit: async (formValue) => {
            try {
                const currentUser = getAuth().currentUser;
                const credentials = EmailAuthProvider.credential(
                    currentUser.email, 
                    formValue.password
                    );
                reauthenticateWithCredential(currentUser, credentials);

                await updateEmail(currentUser, formValue.email)
                onReload();
                onClose();
            } catch (error) {
                console.log(error)
                Toast.show({
                    type:"error",
                    position:"bottom",
                    text1:"Error al cambiar el email, inténtelo nuevamente"
                })
            }
        }
    });



  return (
    <View style={styles.content}>
      <Text h4>Form cambio email</Text>
      <Text h4 styles={styles.text}>                    </Text>
      <Input 
            placeholder="Cambiar email" 
            rightIcon={{
                type:"material-community",
                name:"at",
                color:"#c2c2c2"
            }}
            containerStyle={styles.input} 
            onChangeText={(text) => formik.setFieldValue("email", text)}
            errorMessage={formik.errors.email}
      />
      <Input 
            placeholder="Ingresa tu password" 
            secureTextEntry={showPassword ? false : true}
            rightIcon={{
                 type:"material-community",
                 name:showPassword ? "eye-outline":"eye-off-outline",
                 color: "#c2c2c2",
                 onPress: onShowPassword,
            }}
            containerStyle={styles.input} 
            onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button 
            title="Cambiar"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
      />
    </View>
  )
}