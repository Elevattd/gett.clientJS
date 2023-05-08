import {
	DELETE_CREDENTIALS,
	DELETE_TASK,
	GET_TASKS,
	SET_CREDENTIALS,
	SET_CURRENT_PAGE,
	SET_TASK_PER_PAGE,
	SET_TASK_TO_SHOW,
	UPDATE_TASK,
} from '../consts';

const initialState = {
	auth: {
		username: '',
		password: '',
		autenticate: false,
	},
	tasks: [],
	taskToShow: [],
	pagination: {
		tasksPerPage: 5,
		currentPage: 1,
	},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		case SET_CREDENTIALS:
			return {
				...state,
				auth: { ...action.payload },
			};
		case DELETE_CREDENTIALS:
			return {
				...state,
				auth: initialState.auth,
			};
		case SET_TASK_TO_SHOW:
			return {
				...state,
				taskToShow: action.payload,
			};
		case DELETE_TASK:
			const deleteTask = state.tasks.filter((task) => task.id !== action.payload);
			return {
				...state,
				tasks: deleteTask,
			};
		case UPDATE_TASK:
			const { id, title, completed } = action.payload;
			const index = state.tasks.findIndex((task) => task.id === id);
			const updatedTask = {
				...state.tasks[index],
				title,
				completed,
			};
			const updatedTasks = [...state.tasks];
			updatedTasks[index] = updatedTask;
			return {
				...state,
				tasks: updatedTasks,
			};

		case SET_TASK_PER_PAGE:
			return {
				...state,
				pagination: { ...state.pagination, tasksPerPage: action.payload },
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				pagination: { ...state.pagination, currentPage: action.payload },
			};
		default:
			return state;
	}
};

export default rootReducer;
