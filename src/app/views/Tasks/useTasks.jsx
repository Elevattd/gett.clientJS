import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/actions/tasks';

const useTasks = () => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const [edit, setEdit] = useState(false);
	const [task, setTask] = useState({});

	const handleEditAndOpenModal = (taskSelected) => {
		setVisible(true);
		setEdit(true);
		setTask(taskSelected);
	};

	const handleOpenModal = (taskSelected) => {
		setVisible(true);
		setEdit(false);
		setTask(taskSelected);
	};

	const handleCloseAndCleanState = () => {
		setVisible(false);
		setEdit(false);
		setTask({});
	};

	const handleXClick = (id) => {
		dispatch(deleteTask(id));
	};
	return [visible, edit, handleEditAndOpenModal, handleCloseAndCleanState, handleOpenModal, task, handleXClick];
};

export default useTasks;
