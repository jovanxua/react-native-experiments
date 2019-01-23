import React, { Component } from 'react';
import {
  Animated, FlatList, View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ListItem = ({ item, onSelect }: props) => (
  <TouchableOpacity onPress={() => onSelect(item)}>
    <View style={styles.itemPlaceholder}>
      <Text style={styles.txtItem}>{item.label}</Text>
    </View>
  </TouchableOpacity>
);

class AnimatedList extends Component {
  keyExtractor = item => item.id;

  render() {
    const { activeItemId, data, onSelect } = this.props;
    return(
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listStyle}
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={({item}) => <ListItem item={item} onSelect={onSelect} />}
        />
      </View>
    )
  }
}

export default AnimatedList;
