import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { Icon, Avatar, Text } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { map, filter } from 'lodash';
import { styles } from './UploadImagesForm.styles';
import { LoadingModal } from '../../../Shared'


export function UploadImagesForm(props) {

    const { formik } = props;
    const [isLoading, setIsLoading] = useState(false);

    const openGallery = async() => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality:1
      });
      if(!result.canceled){
        setIsLoading(true);
         uploadImage(result.uri)
      }
    }

    //función para subir imagen seleccionada 
    const uploadImage = async (uri) => {
       const response = await fetch(uri);
       const blob = await response.blob();

       const storage = getStorage();
       const storageRef = ref(storage, `Locaciones/${uuid()}`);

       uploadBytes(storageRef, blob).then((snapshot) => {
         updatePhotosMuestra(snapshot.metadata.fullPath )
      });
    }

    //función que controla el arreglo de imágenes que van con el formulario
      const updatePhotosMuestra = async (imagePath) => {
      const storage = getStorage();
      const imageRef = ref(storage, imagePath);
      const imageUrl = await getDownloadURL(imageRef);
      formik.setFieldValue("images",[...formik.values.images, imageUrl]);
      setIsLoading(false);
    };

    //función para eliminar imágenes seleccionándolas
    const removeImage =(img) => {
       Alert.alert(
         "Eliminar imagen",
         "¿Estás seguro de que quieres eliminar la imagen?",
            [
              {
                text: "Cancelar",
                style: "cancel"
              },
              {
                text: "Eliminar",
                onPress: () => {
                   const result = filter(formik.values.images, (image) => image !== img)
                   formik.setFieldValue("images", result);
                },
              },
            ],
              {cancelable: false}
            );
      };

  return (
    <>
      <ScrollView style={styles.viewImage} horizontal>
          <Icon 
              type="material-community"
              name="camera"
              color="#a7a7a7"
              containerStyle={styles.containerIcon}
              onPress={openGallery}
          />
          {map(formik.values.images, (image) => (
              <Avatar
                  key={image}
                  source = {{uri: image}}
                  containerStyle = {styles.imageStyle}
                  onPress={() => removeImage(image)}
              />
          ))}
          <Text style={styles.error}>{formik.errors.images}</Text>
          <LoadingModal show={isLoading} text="Subiendo imagen"/>
      </ScrollView>
    </>
  )
}