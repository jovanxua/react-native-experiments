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
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 5000,
        }),
      ]),
    ).start();
    
  }

  render() {
    const { children } = this.props;
    const { animatedValue } = this.state;

    return(
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          flex: animatedValue,
          backgroundColor: 'blue',
        }}>
        </Animated.View>
      </View> 
    )
  }
}

export default TopDownAnimation;
