import React from 'react';
import {View, Text} from 'react-native';
import Home from './screens/home';
import {connect, useDispatch} from 'react-redux';
import {getMovies} from './actions/action';

const App = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(App);
