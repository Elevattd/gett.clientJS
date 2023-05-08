import React from 'react';
import Tasks from '../Tasks/Tasks';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../components/Pagination/usePagination';
import StyledContainer from '../../components/Container/styles';

const Home = () => {
	const { tasksToShow } = usePagination();

	return (
		<StyledContainer maxWidth={'xl'} sx={{ marginLeft: '15%' }}>
			<Pagination />
			<Tasks tasks={tasksToShow} />
		</StyledContainer>
	);
};

export default Home;
