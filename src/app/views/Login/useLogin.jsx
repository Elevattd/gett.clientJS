import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCrendentials } from '../../../redux/actions/auth';

const useLogin = () => {
	const dispatch = useDispatch();

	const INITIAL_STATE_LOGIN = {
		username: '',
		password: '',
	};

	const [loginData, setLoginData] = useState(INITIAL_STATE_LOGIN);

	const login = (e) => {
		e.preventDefault();
		try {
			dispatch(setCrendentials(loginData));
		} catch (error) {
			return error;
		}
	};
	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};
	return [login, handleLoginChange];
};

export default useLogin;
