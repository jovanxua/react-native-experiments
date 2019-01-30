import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingVertical: 32,
  },

  listStyle: {
    flex: 1,
    marginTop: 30,
  },

  itemPlaceholder: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginBottom: 14,
    marginHorizontal: 24,
    backgroundColor: '#3c6382',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3, 
  },

  txtItem: {
    fontFamily: 'American Typewriter',
    fontSize: 14,
    color: '#fff'
  }
});

export default styles;