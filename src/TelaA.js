import React from 'react';
import { View, FlatList } from 'react-native';

import FlatComponent from './components/FlatComponent';


const TelaA = () => {

  //https://www.adorocinema.com/filmes/numero-cinemas/
  const data = [
    { key: '0', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '1', filme: 'Batman', ano: 2022, estilo: 'Ação', direcao: 'Matt Reeves', image: 'https://br.web.img2.acsta.net/c_310_420/pictures/22/03/02/19/26/3666027.jpg', descricao: 'Em seu segundo ano de combate ao crime, Batman descobre a corrupção em Gotham City que se conecta a sua própria família enquanto enfrenta um assassino em série conhecido como Charada.' }
  ]

  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <FlatComponent data={item} />} />
    </View>
  );
}

export default TelaA;