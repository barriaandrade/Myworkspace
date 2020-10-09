import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from './styles';


const Home = ({navigation}) => {

const handleNavigateToDetail = () => navigation.navigate('HomeList');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Bienvenido</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToDetail}>
        <Text style={styles.buttonTitle}>Lista de libros</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
