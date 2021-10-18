import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import SliderEntry from '../components/slider-entry';
import styles from '../styles/index.style';

const SLIDER_1_FIRST_ITEM = 1;

export default class CustomCourasel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      movies: props.movies,
      navigation: props.navigation,
    };
  }

  _renderLightItem(item, navigation) {
    return <SliderEntry data={item} even={false} />;
  }

  layoutExample(number, title, type) {
    const isTinder = type === 'tinder';
    return (
      <View
        style={[
          styles.exampleContainer,
          isTinder ? styles.exampleContainerDark : styles.exampleContainerLight,
        ]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>
          {'DigiMovie'}
        </Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
          {title}
        </Text>
        <Carousel
          data={this.state.movies}
          renderItem={({item, index}) => {
            return (
              <SliderEntry
                data={item}
                even={false}
                navigation={this.state.navigation}
              />
            );
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
      </View>
    );
  }

  render() {
    const example4 = this.layoutExample(4, 'En iyi filmler!', 'tinder');

    return (
      <View
        style={styles.scrollview}
        scrollEventThrottle={200}
        directionalLockEnabled={true}>
        {example4}
      </View>
    );
  }
}
