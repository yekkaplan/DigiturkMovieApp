import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import {BACKDROP_URL} from '../constants/app-constant';

export default class SliderEntry extends Component {
  static propTypes = {
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      subtitle: props.original_title,
      image: props.backdrop_path,
    };
  }
  get image() {
    const {
      data: {backdrop_path},
    } = this.props;

    console.info(BACKDROP_URL + backdrop_path);
    return (
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500_and_h282_face' + backdrop_path,
        }}
        style={styles.image}
      />
    );
  }

  render() {
    const {
      data: {title, original_title},
      even,
    } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}>
        {this.props.data.title}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          alert(`You've clicked '${title}'`);
        }}>
        <View style={styles.shadow} />
        <View
          style={[
            styles.imageContainer,
            even ? styles.imageContainerEven : {},
          ]}>
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}>
            {original_title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
