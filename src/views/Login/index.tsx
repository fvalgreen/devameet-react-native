import {Text, View} from 'react-native';
import {useEffect} from 'react'
import handleMessage from '../../utils/message';

const Login = () => {
  useEffect(() => {
    handleMessage({
      title: 'Deletar reunião',
      messages: ['Deseja deletar a reunião?', 'Essa ação não poderá ser desfeita.'],
      isCancelable: true,
      isOpen: true,      
      action: () => console.log('Clicado')
    })
  },[])
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
