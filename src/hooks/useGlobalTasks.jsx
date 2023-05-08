import { useSelector } from 'react-redux';

const useGlobalTasks = () => {
	const { tasks, taskToShow } = useSelector((state) => state);
	return { tasks, taskToShow };
};

export default useGlobalTasks;
