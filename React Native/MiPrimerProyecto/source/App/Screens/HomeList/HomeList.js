import React from 'react';
import {SafeAreaView, FlatList, View, TouchableOpacity, Text} from 'react-native';
import {bookData} from './constants';
import BookItem from '../../Components/BookItem/BookItem';
import styles from './styles';


function HomeList() {
  const keyExtractor = ({id}) => `${id}`;
  const itemSeparator = () => <View style={styles.separator}></View>;
  const renderItem = ({item}) => {
    const {title, author, description, image} = item;

    return (
      <BookItem
        title={title}
        author={author}
        description={description}
        image={image}></BookItem>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableOpacity style={styles.button}>
        <Text>Navegar a pantalla de detalle</Text>
      </TouchableOpacity>
      <FlatList
        bounces={false}
        contentContainerStyle={styles.container}
        data={bookData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparator}>
        </FlatList>
    </SafeAreaView>
  );
}

export default HomeList;
