import { useState, useEffect } from 'react';
import { StyledPaginationButton } from './styles';
import useGlobalTasks from '../../../hooks/useGlobalTasks';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setTaskPerPage, setTasksToShow } from '../../../redux/actions/tasks';

const usePagination = () => {
	const { tasksPerPage, currentPage } = useSelector((state) => state.pagination);
	const dispatch = useDispatch();
	const { tasks, taskToShow } = useGlobalTasks();
	const [totalPages, setTotalPages] = useState(Math.ceil(tasks?.length / tasksPerPage));
	const [pageButtons, setPageButtons] = useState([]);
	const [minButton, setMinButton] = useState(1);
	const [maxButton, setMaxButton] = useState(Math.min(totalPages, 5));

	useEffect(() => {
		const startIndex = (currentPage - 1) * tasksPerPage;
		const endIndex = startIndex + tasksPerPage;
		const tasksSlice = tasks?.slice(startIndex, endIndex);
		dispatch(setTasksToShow(tasksSlice));
	}, [tasks, currentPage, tasksPerPage]);

	useEffect(() => {
		const total = Math.ceil(tasks?.length / tasksPerPage);
		setTotalPages(total);
		// eslint-disable-next-line
	}, [tasksPerPage]);

	useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(totalPages);
			dispatch(setCurrentPage(totalPages));
		}
		// eslint-disable-next-line
	}, [currentPage, totalPages]);

	useEffect(() => {
		const newPageButtons = [];
		const numButtonsToShow = Math.min(totalPages, 5);
		let start = Math.max(currentPage - Math.floor(numButtonsToShow / 2), 1);
		let end = Math.min(start + numButtonsToShow - 1, totalPages);

		if (end - start + 1 < numButtonsToShow) {
			start = Math.max(end - numButtonsToShow + 1, 1);
		}

		for (let i = start; i <= end; i++) {
			newPageButtons.push(
				<StyledPaginationButton
					key={i}
					className={i === currentPage ? 'selected' : ''}
					onClick={() => handleButtonChange(i)}
				>
					{i}
				</StyledPaginationButton>,
			);
		}

		setPageButtons(newPageButtons);
		setMinButton(start);
		setMaxButton(end);
		// eslint-disable-next-line
	}, [currentPage, tasksPerPage]);

	const handlePageChange = (newPage) => {
		handleButtonChange(newPage);

		if (newPage === 1) {
			setMinButton(1);
			setMaxButton(Math.min(totalPages, 5));
		} else if (newPage === totalPages) {
			setMaxButton(totalPages);
			setMinButton(Math.max(totalPages - 4, 1));
		} else if (newPage < minButton) {
			setMinButton(Math.max(newPage - 2, 1));
			setMaxButton(newPage + 2);
		} else if (newPage > maxButton) {
			setMinButton(newPage - 2);
			setMaxButton(Math.min(newPage + 2, totalPages));
		}
	};
	const handleButtonChange = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
	};

	const handleTasksPerPageChange = (event) => {
		dispatch(setTaskPerPage(parseInt(event.target.value)));
	};

	return {
		handlePageChange,
		pageButtons,
		totalPages,
		currentPage,
		taskToShow,
		handleTasksPerPageChange,
	};
};

export default usePagination;
