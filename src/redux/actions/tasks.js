import { AxiosInstance } from '../../app/services/AxiosInstance';
import { GET_TASKS, SET_TASK_TO_SHOW, DELETE_TASK, UPDATE_TASK, SET_TASK_PER_PAGE, SET_CURRENT_PAGE } from '../consts';
import tasjMockup from '../../mockup.json';
import { NotificationManager } from 'react-notifications';

import { MESSAGE_NOTIFICATION, MESSAGE_TITLES } from '../../constants/messages';

export const getAllTasks = async (dispatch) => {
	try {
		// const { data } = await AxiosInstance.get('todos');
		return dispatch({
			type: GET_TASKS,
			payload: tasjMockup,
		});
	} catch (error) {
		return error;
	}
};

export const setTasksToShow = (tasks) => {
	return async (dispatch) => {
		try {
			return dispatch({
				type: SET_TASK_TO_SHOW,
				payload: tasks,
			});
		} catch (error) {
			return error;
		}
	};
};

export const deleteTask = (tasksID) => {
	return async (dispatch) => {
		try {
			NotificationManager.success(MESSAGE_NOTIFICATION.DELETE_OK, MESSAGE_TITLES.TASK, 3000);

			return dispatch({
				type: DELETE_TASK,
				payload: tasksID,
			});
		} catch (error) {
			NotificationManager.error(MESSAGE_NOTIFICATION.SERVER_ERROR, MESSAGE_TITLES.SESSION, 3000);

			return error;
		}
	};
};

export const updateTask = (task) => {
	return async (dispatch) => {
		try {
			NotificationManager.success(MESSAGE_NOTIFICATION.UPDATE_OK, MESSAGE_TITLES.TASK, 3000);
			return dispatch({
				type: UPDATE_TASK,
				payload: task,
			});
		} catch (error) {
			NotificationManager.error(MESSAGE_NOTIFICATION.SERVER_ERROR, MESSAGE_TITLES.SESSION, 3000);

			return error;
		}
	};
};

export const setTaskPerPage = (number) => {
	return async (dispatch) => {
		try {
			return dispatch({
				type: SET_TASK_PER_PAGE,
				payload: number,
			});
		} catch (error) {
			return error;
		}
	};
};

export const setCurrentPage = (page) => {
	return async (dispatch) => {
		try {
			return dispatch({
				type: SET_CURRENT_PAGE,
				payload: page,
			});
		} catch (error) {
			return error;
		}
	};
};
