import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../app.json';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  input: {
    color: colors.primary02,
    fontSize: 14,
    fontWeight: '400',
    width: width * 0.7,
  },
  icon: {
    marginRight: width * 0.02,
  },
  container: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: colors.primary02,
    borderBottomWidth: 1,
    marginHorizontal: width * 0.1,
  },
});

export default styles;
