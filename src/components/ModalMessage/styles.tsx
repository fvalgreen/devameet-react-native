import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../app.json';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: width * 0.9,
    minHeight: height * 0.27,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.primary02,
    fontFamily: 'biennale',
    fontWeight: '700',
  },
  messagesContainer: {
    marginTop: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    fontFamily: 'biennale',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCancel: {
    fontSize: 17,
    color: colors.primary02,
    textDecorationLine: 'underline',
    margin: width * 0.04,
  },
});

export default styles;
