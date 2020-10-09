import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#bfbfbf',
    width: '87%',
    height: '5%',
    marginTop: 20,
    borderRadius:10,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default styles;
