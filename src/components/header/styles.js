import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#34495e',
    backgroundColor: '#e74c3c',
    top: 50,
    zIndex: 999,
  },
  txtTitle: {
    fontFamily: 'American Typewriter',
    fontSize: 18,
    color: '#fff'
  }
});

export default styles;