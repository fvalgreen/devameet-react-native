import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import * as AuthServices from '../../services/AuthServices';
import handleMessage from '../../utils/message';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const doLogin = async () => {
    try {
      setLoading(true);
      await AuthServices.login({login: email, password: password});

      // Navegar para a Home
    } catch (error) {
      console.log(error);
      handleMessage({
        isOpen: true,
        title: 'Erro',
        messages: ['Erro ao efetuar o login, tente novamente'],
        isCancelable: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Input
        onChange={value => setEmail(value)}
        placeholder="Email"
        value={email}
        icon={require('../../assets/images/envelope.png')}
      />
      <Input
        onChange={value => setPassword(value)}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        icon={require('../../assets/images/key.png')}
        style={styles.inputPassword}
      />
      <Button onPress={doLogin} placeholder="Login" style={styles.button} loading={loading} disable={!email || !password} />
      <View style={styles.containerWithoutAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => console.log('ir para cadastro')}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
