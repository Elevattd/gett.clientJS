import React from 'react';
import { Button, Input, LoginContainer, LoginForm } from './styles';
import useLogin from './useLogin';

const Login = () => {
	const [login, handleLoginChange] = useLogin();
	return (
		<LoginContainer>
			<LoginForm>
				<h1>Inicie sesión.</h1>
				<Input name='username' type='text' placeholder='Usuario.' onChange={handleLoginChange} />
				<Input name='password' type='password' placeholder='Contraseña.' onChange={handleLoginChange} />
				<Button type='submit' onClick={login}>
					ENTRAR.
				</Button>
			</LoginForm>
		</LoginContainer>
	);
};

export default Login;
