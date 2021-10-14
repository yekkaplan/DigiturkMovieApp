import React, {Component} from 'react';
import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import SliderEntry from '../components/slider-entry';
import styles, {colors} from '../styles/index.style';
import {ENTRIES1, ENTRIES2} from '../static/entries';
import {scrollInterpolators, animatedStyles} from '../utils/animations';

const SLIDER_1_FIRST_ITEM = 1;

export default class CustomCourasel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      movies: props.movies,
    };
  }

  _renderLightItem({item, index}) {
    return <SliderEntry data={item} />;
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
          renderItem={this._renderLightItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          itemHeight={500}
          sliderHeight={1000}
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
