import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from '@rneui/base';
import { useFormik } from 'formik';
import { getAuth, updateProfile } from 'firebase/auth';
import Toast from 'react-native-toast-message'
import { initialValues, validationSchema } from './ChangeDisplayNameForm.data'
import { styles } from './ChangeDisplayNameForm.styles'

export function ChangeDisplayNameForm(props) {
  const {onClose, onReload} = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    //cambiar el nombre del usuario al presionar el botón
    onSubmit: async (formValue) => {
        try {
            const {displayName} = formValue;
            const currentUser = getAuth().currentUser
            await updateProfile(currentUser, {displayName});
            onReload();
            onClose();
        } catch (error) {
            Toast.show({
                type:"error",
                position:"bottom",
                text1:"Error al cambiar nombre y apellido de usuario"
            })
        }
    }
  })

  return (
    <View style={styles.content}>
      <Text h4>Form cambio nombre</Text>
      <Text h4>                    </Text>
      <Input 
          placeholder='Cambiar nombre y apellido'
          rightIcon={{type: "material-community",
                      name: "account-circle-outline",
                      color: "#c2c2c2"
                    }}
          onChangeText={(text) => formik.setFieldValue("displayName", text)}
          errorMessage={formik.errors.displayName}
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