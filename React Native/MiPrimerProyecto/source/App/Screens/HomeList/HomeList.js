import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
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
    <FlatList
      bounces={false}
      contentContainerStyle={styles.container}
      data={bookData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}></FlatList>
  );
}

export default HomeList;
