import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import BookItem from '../Components/BookItem/BookItem';
import styles from './styles';
import cover from '../Assets/WellTempered.jpg';

const Home = () => {
  const author = 'Well Tempered Clavier';
  const title = 'Johann Sebastian Bach';
  const description =
    'Ciclos de preludios y fugas compuestos en todas las tonalidades mayores y menores de la gama cromática.';
  return (
    <SafeAreaView style={styles.container}>
      <BookItem
        image={cover}
        title={title}
        subtitle={author}
        description={description}></BookItem>
    </SafeAreaView>
  );
};

export default Home;
