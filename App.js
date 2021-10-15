import React from 'react';
import {View, Text} from 'react-native';
import Home from './screens/home';
import {connect, useDispatch} from 'react-redux';
import {getMovies} from './actions/action';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigator/navigtor';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(App);
