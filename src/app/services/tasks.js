import { AxiosInstance } from './AxiosInstance';

export const getAllTasks = async () => {
	try {
		const { data } = await AxiosInstance.get('todos');
		return data;
	} catch (error) {
		return error;
	}
};
