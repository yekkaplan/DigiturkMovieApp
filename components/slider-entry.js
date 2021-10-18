import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
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
      navigation: props.navigation,
    };
  }
  get image() {
    const {
      data: {backdrop_path},
    } = this.props;

    return (
      <Image
        source={{
          uri: BACKDROP_URL + backdrop_path,
        }}
        style={styles.image}
      />
    );
  }

  render() {
    const {
      data: {title, original_title},
      even,
      navigation,
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
          navigation.navigate('MovieDetail');
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
/**
 * export default class SliderEntry extends Component {
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

    return (
      <Image
        source={{
          uri: BACKDROP_URL + backdrop_path,
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
        onPress={() => {}}>
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

 */

/**
 * 
 * const SlidertEntry = props => {
  const navigation = useNavigation();
  const uppercaseTitle = props.title ? (
    <Text style={[styles.title]} numberOfLines={2}>
      {props.title}
    </Text>
  ) : (
    false
  );

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => {
        navigation.navigate('/detail');
      }}>
      <View style={styles.shadow} />
      <View style={[styles.imageContainer]}>
        <Image
          source={{
            uri: BACKDROP_URL + props.backdrop_path,
          }}
          style={styles.image}
        />
        <View
          style={[styles.radiusMask, props.even ? styles.radiusMaskEven : {}]}
        />
      </View>
      <View
        style={[
          styles.textContainer,
          props.even ? styles.textContainerEven : {},
        ]}>
        {uppercaseTitle}
        <Text
          style={[styles.subtitle, props.even ? styles.subtitleEven : {}]}
          numberOfLines={2}>
          {props.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SlidertEntry;
 */
