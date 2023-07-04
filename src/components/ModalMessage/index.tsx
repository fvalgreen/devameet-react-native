import {Text, View, Modal, TouchableOpacity} from 'react-native';
import {IStore} from '../../models/Store';
import {defaultProps} from '../../store/defaultProps';
import {Dispatch} from 'redux';
import {IActionProps} from '../../models/ActionProps';
import {defaultActions} from '../../store/defaultActions';
import {connect} from 'react-redux';
import {IProps} from './types';
import Button from '../Button';
import styles from './styles';

const ModalMessage = (props: IProps) => {
  const {message, setMessage} = props;

  const close = () => {
    setMessage!!({isOpen: false});
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.message.isOpen!!}>
      <View style={styles.modalBackGround}>
        <View style={styles.modalView}>
          <View style={styles.textContainer}>
            {message.title && <Text style={styles.title}>{message.title}</Text>}
            <View style={styles.messagesContainer}>
              {message.messages &&
                message.messages.map((message: string, index: number) => (
                  <Text key={index} style={styles.message}>
                    {message}
                  </Text>
                ))}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            {message.isCancelable && (
              <TouchableOpacity onPress={() => close()}>
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>
            )}
            {message.action && (
              <Button
                onPress={() => {
                  message.action!!();
                  close();
                }}
                placeholder="Confirmar"
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: any): IStore => defaultProps(state);
const mapDispatchToProps = (dispatch: Dispatch): IActionProps =>
  defaultActions(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage);
