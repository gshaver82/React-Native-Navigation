import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
// const fontSize = Math.min(width, height) * 0.18; // adjust 0.1 to adjust the size of the font

export const globalStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'teal',
  },
  headerTitleStyle: {
    fontWeight: '800',
    fontSize: 40,
    color: 'white',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'flex-start',
    backgroundColor: '#40E0D0',
  },
  TouchableOpacitybutton: {
    backgroundColor: 'blue',
    padding: 9,
    borderRadius: 5,
    alignItems: 'center',
    margin: 15
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
    fontWeight: '700',
    fontSize: Math.min(width, height) * 0.18,
    alignSelf: 'center',
  },
  text: {
    fontSize: Math.min(width, height) * 0.09,
    alignSelf: 'center',
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical: 3,
    backgroundColor: 'teal',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});