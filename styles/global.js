import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'teal',
  },
  headerTitleStyle: {
    fontWeight: '800',
    fontSize: 40,
    color: 'white', 
    backgroundColor: 'white',
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
  TouchableOpacitybutton: {
    backgroundColor: 'blue',
    padding: 9,
    borderRadius: 5,
    alignItems: 'center',
    margin:15
  },
  buttonText: {
    color: 'white',
    fontSize: 35, 
    fontWeight: '500',
    textAlign: 'center',
  },
  screenTitle: {
    fontWeight: '900',
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: 'System', 
  },
  alarmText: {
    fontWeight: '500',
    fontSize: 20,
    alignSelf: 'center',
  },
});