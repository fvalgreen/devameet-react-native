import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../app.json';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.8,
    marginHorizontal: width * 0.1,
  },
  inputPassword: {
    marginBottom: height * 0.05,
    marginTop: height * 0.02,
  },
  containerWithoutAccount: {
    marginTop: height * 0.04,
    alignItems: 'center',
  },
  textSignUp: {
    color: colors.primary02,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'BiennaleBold',
    fontWeight: '700'    
  },
  logo: {
    marginBottom: height * 0.1
  }
});

export default styles;
