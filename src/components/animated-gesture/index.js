import React, { Component } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  View
} from 'react-native';

const CIRCLE_SIZE = 80;

class AnimatedGesture extends Component {
  constructor(props) {
    super(props);

    const objectPosition = new Animated.ValueXY({ x: 50 , y: 100 });

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        objectPosition.setOffset(objectPosition.__getValue());
        objectPosition.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null,
        { dy: objectPosition.y, dx: objectPosition.x }
      ]),
      onPanResponderTerminationRequest: (evt, gestureState) => {
        // unhighlight object
      },
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // unhighlight object
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });

    this.state = { objectPosition };
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.circle,
            this.state.objectPosition.getLayout(),
          ]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  circle: {
    backgroundColor: 'blue',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
  },
});

export default AnimatedGesture;


