import { NotificationManager } from 'react-notifications';
import { validateCredentials } from '../../app/services/auth';
import { SET_CREDENTIALS, DELETE_CREDENTIALS } from '../consts';
import { MESSAGE_NOTIFICATION, MESSAGE_TITLES } from '../../constants/messages';

export const setCrendentials = (userInfo, cookies) => {
	try {
		const user = validateCredentials(userInfo);
		if (user) {
			return async (dispatch) => {
				const credentials = { ...user, autenticate: true };
				dispatch({
					type: SET_CREDENTIALS,
					payload: credentials,
				});
				localStorage.setItem('user', JSON.stringify(credentials));
				NotificationManager.success(
					cookies ? MESSAGE_NOTIFICATION.COOKIES_OK : MESSAGE_NOTIFICATION.LOGIN_OK,
					MESSAGE_TITLES.SESSION,
					3000,
				);
			};
		}
		NotificationManager.error(MESSAGE_NOTIFICATION.LOGIN_ERROR, MESSAGE_TITLES.SESSION, 3000);
	} catch (error) {
		NotificationManager.error(MESSAGE_NOTIFICATION.SERVER_ERROR, MESSAGE_TITLES.SESSION, 3000);
		return error;
	}
};

export const deleteCredentials = () => {
	try {
		return async (dispatch) => {
			dispatch({
				type: DELETE_CREDENTIALS,
			});
			NotificationManager.success(MESSAGE_NOTIFICATION.LOGOUT_OK, MESSAGE_TITLES.SESSION_OUT, 3000);

			localStorage.removeItem('user');
		};
	} catch (error) {
		NotificationManager.error(MESSAGE_NOTIFICATION.SERVER_ERROR, MESSAGE_TITLES.SESSION, 3000);
		return error;
	}
};
