import { useDispatch } from 'react-redux';
import { deleteCredentials } from '../../../redux/actions/auth';

const useNavbar = () => {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		try {
			dispatch(deleteCredentials());
		} catch (error) {
			return error;
		}
	};
	return [handleLogOut];
};

export default useNavbar;
