import React, { useState,useEffect } from 'react';
import { ScrollView, Text, Dimensions  } from 'react-native';
import { doc, 
         onSnapshot, 
         collection, 
         query, 
         where, 
         orderBy,
         getDoc,
         getDocs } from "firebase/firestore";
import { Carousel } from '../../../components/Shared';
import { Loading } from '../../../components/Shared';
import { Info } from '../../../components/Muestra/Info';
import { BtnLecturaForm } from '../../../components/Muestra';
import { Reviews } from '../../../components/Muestra/Reviews';
import { db } from "../../../utils";
import { styles } from './MuestraScreenDetalle.styles';

const {width} = Dimensions.get("window");

export function MuestraScreenDetalle(props) {
const [locacion, setLocacion] = useState(null);
const { route } = props;

     useEffect(() => {
          setLocacion(null)
          onSnapshot(doc(db,"Locaciones", route.params.id),(doc) => {
              setLocacion(doc.data());
          });
      }, [route.params.id]);

  //return <Loading show text="Cargando locaciones"/>;    
  if (!locacion) return <Loading show text="Cargando locaciones"/>;

  return (
    <ScrollView style={styles.content}>
        <Carousel arrayImages={locacion.images} height={490} width={width} />
        <Info locacion={locacion}/>
        <BtnLecturaForm idLocacion={locacion.id}/>
        <Reviews idLocacion={locacion.id} />
    </ScrollView>
  )
}