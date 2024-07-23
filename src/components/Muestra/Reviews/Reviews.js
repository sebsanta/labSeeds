import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, ListItem, Avatar } from '@rneui/themed';
import { doc, onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';
import { Loading } from '../../Shared/Loading';
import { map } from 'lodash';
import { db } from '../../../utils';
import { styles } from './Reviews.styles';

export function Reviews(props) {
    const {idLocacion} = props

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const q = query(collection(db, "nuevaLectura"), 
                  where("idLectura", "==", idLocacion),
                  orderBy("createdAt", "desc")
            );
        onSnapshot(q, (snapshot) => {
            setReviews(snapshot.docs);
        })
    }, 
    []);

    if(!reviews) return <Loading show text="Cargando"/>

  return (
    <View style={styles.content}>
        {map(reviews, (review) => {
            const data = review.data();
            const createReview = new Date(data.createdAt.seconds * 1000);
            //const createReview = new Date(doc.item.data().createdAt.seconds * 1000);
            //console.log(data);
            return (
                <ListItem key={data.id} bottomDivider containerStyle={styles.review}>
                   <Avatar source={{ uri: data.avatar }} size={50} rounded  />
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>
                            {data.title}
                            <View>
                                <Text>Descripción: {data.comment}</Text>
                                <Text>Dispositivo: {data.lapiz}</Text>
                                <Text>PPM: {data.ppm}</Text>
                                <Text>Fecha: {createReview.getDate()}/0{createReview.getMonth() + 1}/
                                                                  {createReview.getFullYear()} - {createReview.getHours() < 10 ? "0" : ""}
                                                                  {createReview.getHours()}:{createReview.getMinutes() < 10 ? "0" : ""}
                                                                  {createReview.getMinutes()}</Text>
                            </View>
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            );
        })}
    </View>
  )
}