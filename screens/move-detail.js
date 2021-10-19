import React from 'react';

import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {BACKDROP_URL} from '../constants/app-constant';

const MovieDetail = props => {
  const movieDetail = props.route.params.movies;
  console.info(movieDetail);

  return (
    <ScrollView>
      <Image
        style={styles.Image}
        source={{uri: BACKDROP_URL + movieDetail.backdrop_path}}
      />
      <View style={styles.TextContainer}>
        <Text>{movieDetail.title}</Text>
      </View>
      <View style={styles.TextContainer}>
        <Text>{movieDetail.original_title}</Text>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>{movieDetail.overview}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Image: {
    height: 300,
    width: '100%',
  },
  Text: {
    fontWeight: '500',
    color: 'black',
  },
  TextContainer: {
    borderRadius: 16,
    borderColor: 'grey',
    borderWidth: 2,
    margin: 8,
    alignContent: 'center',
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
});
export default MovieDetail;
