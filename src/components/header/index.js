import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default ({ title }: props) => (
  <View style={styles.container}>
    <Text style={styles.txtTitle}>
      {title}
    </Text>
  </View>
)