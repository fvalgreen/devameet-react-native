import {TextInput, View, Image} from 'react-native';
import {IInput} from './types';
import styles from './styles';

const Input = (props: IInput) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.icon && <Image source={props.icon} style={styles.icon} />}
      <TextInput
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        autoCapitalize="none"
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        style={styles.input}></TextInput>
    </View>
  );
};

export default Input;
