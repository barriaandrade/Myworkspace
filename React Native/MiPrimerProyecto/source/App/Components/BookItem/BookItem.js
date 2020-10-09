import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const BookItem = ({image, title, author, description}) => {
  const [touched, setTouched] = useState(false);
  const handlePress = () => {
    setTouched(!touched);
  }
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={[styles.viewContainer, touched && styles.onPressViewContainer ]}>
          <Image source={image} style={styles.image} />
          <View style={styles.content}>
            <Text style={[styles.title, touched && styles.onPressTitle ]}>
              {title}
            </Text>
            <Text style={styles.subtitle}>{author}</Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={styles.textContent}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default BookItem;
