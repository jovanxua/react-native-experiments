import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

// Experiments
import {
  AnimatedBackground,
  PulseIndicator,
} from './components';

export default () => (
  <AnimatedBackground>
    <PulseIndicator />
  </AnimatedBackground>
)