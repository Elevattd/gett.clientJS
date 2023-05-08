import { useSelector } from 'react-redux';

const useAuth = () => {
	const {
		auth: { autenticate },
	} = useSelector((state) => state);
	return [autenticate];
};

export default useAuth;
