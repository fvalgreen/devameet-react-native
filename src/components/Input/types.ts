import {ImageSourcePropType} from 'react-native';

export interface IInput {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  icon?: ImageSourcePropType;
  style?: any;
}
