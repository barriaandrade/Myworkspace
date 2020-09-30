import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import wellTemperedIcon from '../Assets/WellTempered.jpg';
import styles from './styles';

const Card: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Image source={wellTemperedIcon} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>Well Tempered Clavier</Text>
            <Text style={styles.subtitle}>Johann Sebastian Bach</Text>
            <Text style={styles.textContent}>
              Ciclos de preludios y fugas compuestos en las 24 tonalidades.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Card;
