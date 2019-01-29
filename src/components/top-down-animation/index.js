import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Dimensions,
} from 'react-native';
import styles from '../animated-list/styles';

const { height } = Dimensions.get('window');

class TopDownAnimation extends Component {
  state = {
    animatedValue: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animatedValue, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    
  }

  render() {
    const { children } = this.props;
    const { animatedValue } = this.state;
    const currentOffset = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0]
    });

    return(
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Animated.View style={{
          flex: 1,
          backgroundColor: 'blue',
          transform: [{ translateY: currentOffset }],
        }}>
        </Animated.View>
      </View> 
    )
  }
}

export default TopDownAnimation;
