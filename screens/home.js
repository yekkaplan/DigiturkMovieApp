/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppBar from '../components/app-bar';
import {ACCENT_COLOR} from '../constants/app-constant';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../actions/action';
import CustomCourasel from './courasel';

const Home = props => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <View style={styles.container}>
      {movies.results != undefined ? (
        <CustomCourasel
          movies={props.movies.results}
          navigation={props.navigation}
        />
      ) : (
        <Text> Yükleniyor</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ACCENT_COLOR,
    height: '100%',
  },
});
const mapStateToProps = state => {
  return {
    movies: state.movies,
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps, {getMovies})(Home);
