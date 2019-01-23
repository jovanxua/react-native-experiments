import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

class AnimatedBackground extends Component {
  state = {
    animatedValue: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animatedValue, {
          toValue: 6,
          duration: 10000,
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 10000,
        }),
      ]),
    ).start();
    
  }

  render() {
    const { children } = this.props;
    var color = this.state.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4, 5, 6],
      outputRange: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    });

    return(
      <Animated.View style={{
        flex: 1,
        backgroundColor: color
      }}>
        <SafeAreaView style={{ backgroundColor: 'transparent' }}>
          { children }
        </SafeAreaView>
      </Animated.View>
    )
  }
}

export default AnimatedBackground;
