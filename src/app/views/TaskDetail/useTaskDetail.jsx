import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../redux/actions/tasks';

const useTaskDetail = ({ task, visible, onClose }) => {
	const dispatch = useDispatch();
	const [taskToEdit, setTaskToEdit] = useState(task);

	useEffect(() => {
		if (visible) {
			setTaskToEdit(task);
		} else {
			setTaskToEdit({});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible]);

	const handleTaskEditChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setTaskToEdit({ ...taskToEdit, [name]: value });
	};

	const handleCompletedChange = (e) => {
		e.preventDefault();
		const { name, checked } = e.target;

		setTaskToEdit({ ...taskToEdit, [name]: checked });
	};

	const handleTaskConfirmUpdate = (e) => {
		e.preventDefault();
		try {
			dispatch(updateTask(taskToEdit));
		} catch (error) {
			return error;
		} finally {
			setTaskToEdit({});
			onClose();
		}
	};
	return [taskToEdit, handleTaskEditChange, handleTaskConfirmUpdate, handleCompletedChange];
};

export default useTaskDetail;
