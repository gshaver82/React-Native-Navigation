import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flex: 1,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: 'blue',
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
    margin:15
  },
  buttonText: {
    color: 'white',
  },

});