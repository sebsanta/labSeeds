import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { getAuth, 
         updatePassword, 
         EmailAuthProvider, 
         reauthenticateWithCredential } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { styles } from './ChangePasswordForm.styles'
import { validationSchema, initialValues } from './ChangePasswordForm.data';

export function ChangePasswordForm(props) {

const {onClose, onReload} = props;

const [showPassword, setShowPassword] = useState(false);
const [showPassword2, setShowPassword2] = useState(false);
const [showPassword3, setShowPassword3] = useState(false);
const onShowPassword = () => setShowPassword((prevState) => !prevState);
const onShowPassword2 = () => setShowPassword2((prevState) => !prevState);
const onShowPassword3 = () => setShowPassword3((prevState) => !prevState);

const formik = useFormik({
    initialValues: initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit: async (formValue) =>{
        try {
            const currentUser = getAuth().currentUser;
            const credentials = EmailAuthProvider.credential(
                currentUser.email,
                formValue.password
            );
            reauthenticateWithCredential(currentUser, credentials)
            await updatePassword(currentUser, formValue.newPassword)
            onClose();
        } catch (error) {
             Toast.show({
                type: "error",
                position:"bottom",
                text1:"Error al cambiar de contraseña"
            })
        }
    }
})


  return (
    <View style={styles.content}>
      <Text h4 styles={styles.text}>Form cambio password</Text>
      <Text h4 styles={styles.text}>                    </Text>
         <Input 
            placeholder='Contraseña actual'
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false:true}
            rightIcon={{
                type: "material-community",
                name: showPassword? "eye-outline":"eye-off-outline",
                color: "#c2c2c2",
                onPress: onShowPassword,
            }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
        />
         <Input 
            placeholder='Contraseña nueva'
            containerStyle={styles.input}
            secureTextEntry={showPassword2 ? false:true}
            rightIcon={{
                type: "material-community",
                name: showPassword2? "eye-outline":"eye-off-outline",
                color: "#c2c2c2",
                onPress: onShowPassword2,
            }}
            onChangeText={(text) => formik.setFieldValue("newPassword", text)}
            errorMessage={formik.errors.newPassword}
        />
        <Input 
            placeholder='Repetir contraseña nueva'
            containerStyle={styles.input}
            secureTextEntry={showPassword3 ? false:true}
            rightIcon={{
                type: "material-community",
                name: showPassword3? "eye-outline":"eye-off-outline",
                color: "#c2c2c2",
                onPress: onShowPassword3,
            }}
            onChangeText={(text) => formik.setFieldValue("repeatNewPassword", text)}
            errorMessage={formik.errors.repeatNewPassword}
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