import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {View, Platform, Image, StyleSheet} from 'react-native';
import {DIGITURK_IMAGE} from '../constants/app-constant';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const styles = StyleSheet.create({
  appBarBottom: {
    backgroundColor: '#f8edeb',
  },
  appBarTextStyle: {
    fontWeight: '600',
    color: 'black',
  },

  tinyLogo: {
    width: 100,
    height: 40,
    resizeMode: 'stretch',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const AppBar = () => (
  <Appbar.Header style={styles.appBarBottom}>
    <Appbar.Content
      title="En Güncel Filmler!"
      titleStyle={styles.appBarTextStyle}
      subtitle={'The Movie App'}
    />
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: DIGITURK_IMAGE,
        }}
      />
    </View>
  </Appbar.Header>
);

export default AppBar;
