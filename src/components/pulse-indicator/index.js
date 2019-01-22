import React, { Component } from 'react';
import {
  Animated,
  View,
} from 'react-native';

import styles from './styles';

class PulseIndicator extends Component {
  constructor(props) {
    super(props);
    const minSize = this.props.minSize || 60;
    const maxSize = this.props.maxSize || 150;
    const minOpacity = this.props.minOpacity || 0;
    const maxOpacity = this.props.maxOpacity || 0.2;
    const minBorderRad = minSize * 2;
    const maxBorderRad = maxSize * 2;
    const gapDuration = this.props.gapDuration || 600;
    const maxOpacityDurationFactor = this.props.maxOpacityDurationFactor || 0.4;
    const outerDuration = this.props.outerDuration || 2000;
    const innerDuration = this.props.innerDuration || 2000;
    const centerSize = this.props.centerSize || 15;
    const centerOpacity = this.props.centerOpacity || 1;
    const pulseColor = this.props.pulseColor || '#40b217';
    const centerColor = this.props.centerColor || '#40b217';

    this.state = {
      minSize: minSize,
      maxSize: maxSize,
      minOpacity: minOpacity,
      maxOpacity: maxOpacity,
      minBorderRad: minBorderRad,
      maxBorderRad: maxBorderRad,
      gapDuration: gapDuration,
      maxOpacityDurationFactor: maxOpacityDurationFactor,
      outerDuration: outerDuration,
      innerDuration: innerDuration,
      centerSize: centerSize,
      centerOpacity: centerOpacity,
      pulseColor: pulseColor,
      centerColor: centerColor,
      fadeAnimOuter: new Animated.Value(minOpacity),
      fadeAnimInner: new Animated.Value(minOpacity),
      sizeAnimOuter: new Animated.Value(minSize),
      sizeAnimInner: new Animated.Value(minSize),
      borderRadAnimOuter: new Animated.Value(minBorderRad),
      borderRadAnimInner: new Animated.Value(minBorderRad),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const {
      minSize,
      maxSize,
      minOpacity,
      maxOpacity,
      minBorderRad,
      maxBorderRad,
      gapDuration,
      maxOpacityDurationFactor,
      outerDuration,
      innerDuration,
      centerSize,
      centerOpacity,
    } = this.state;
    Animated.loop(Animated.stagger(gapDuration, [
      Animated.parallel([
        Animated.timing(this.state.sizeAnimOuter, {
          toValue: maxSize,
          duration: outerDuration,
        }),
        Animated.timing(this.state.borderRadAnimOuter, {
          toValue: maxBorderRad,
          duration: outerDuration,
        }),
        Animated.sequence([
          Animated.timing(this.state.fadeAnimOuter, {
            toValue: maxOpacity,
            duration: outerDuration * maxOpacityDurationFactor,
          }),
          Animated.timing(this.state.fadeAnimOuter, {
            toValue: minOpacity,
            duration: outerDuration,
          }),
        ]),
      ]),
      Animated.parallel([
        Animated.timing(this.state.sizeAnimInner, {
          toValue: maxSize,
          duration: innerDuration,
        }),
        Animated.timing(this.state.borderRadAnimInner, {
          toValue: maxBorderRad,
          duration: innerDuration,
        }),
        Animated.sequence([
          Animated.timing(this.state.fadeAnimInner, {
            toValue: maxOpacity,
            duration: innerDuration * maxOpacityDurationFactor,
          }),
          Animated.timing(this.state.fadeAnimInner, {
            toValue: minOpacity,
            duration: innerDuration,
          }),
        ]),
      ]),
    ])).start();
  }

  render() {
    const {
      maxSize,
      centerSize,
      centerOpacity,
      pulseColor,
      centerColor,
      fadeAnimOuter,
      fadeAnimInner,
      sizeAnimOuter,
      sizeAnimInner,
      borderRadAnimOuter,
      borderRadAnimInner,
    } = this.state;

    return (
      <View style={styles.container}>
        <View 
          style={[
            styles.contPlaceholder,
            {
              width: maxSize,
              height: maxSize
            }
          ]}>
          <View 
            style={[
              styles.contCenter,
              {
                backgroundColor: centerColor,
                width: centerSize,
                height: centerSize,
                borderRadius: centerSize*2,
                opacity: centerOpacity,
                left: (maxSize / 2) - (centerSize / 2),
                right: 0,
              }
            ]}
          />
          <Animated.View
            style={[
              styles.contInner,
              {
                backgroundColor: pulseColor,
                opacity: fadeAnimInner,
                width: sizeAnimInner,
                height: sizeAnimInner,
                borderRadius: borderRadAnimInner,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.contOuter,
              {
                backgroundColor: pulseColor,
                opacity: fadeAnimOuter,
                width: sizeAnimOuter,
                height: sizeAnimOuter,
                borderRadius: borderRadAnimOuter,
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

export default PulseIndicator;