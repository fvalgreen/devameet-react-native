import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {IButton} from './types';
import {colors} from '../../../app.json';
import styles from './styles';

const Button = (props: IButton) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disable}
      style={[styles.button, props.style, props.disable? styles.buttonDisabled : null]}>
      {props.loading ? (
        <ActivityIndicator size={30} color={colors.white} />
      ) : (
        <Text style={styles.textButton} >{props.placeholder}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
