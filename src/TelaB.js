import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Animatable from "react-native-animatable";

const TelaB = () => {

  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Image 
          source={{ uri: data.image }} 
          resizeMode='contain'
          style={{ width: 200, height: 250, alignSelf: 'center' }} />
      </Animatable.View>

      <Text>FILME: {data.filme}</Text>
      <Text>ANO: {data.ano}</Text>
      <Text>ESTILO: {data.estilo}</Text>
      <Text>DESCRIÇÃO: {data.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  }
})

export default TelaB;