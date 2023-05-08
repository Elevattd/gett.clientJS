import React, { useState } from 'react';
import usePagination from './usePagination';
import { StyledPaginationButton, StyledPaginationSelect, SyledPagination } from './styles';
import { useSelector } from 'react-redux';

const Pagination = () => {
	const { tasksPerPage } = useSelector((state) => state);

	const { handlePageChange, pageButtons, totalPages, currentPage, handleTasksPerPageChange } = usePagination();

	return (
		<SyledPagination>
			<StyledPaginationSelect id='tasksPerPageSelect' value={tasksPerPage} onChange={handleTasksPerPageChange}>
				<option value='5'>5</option>
				<option value='10'>10</option>
				<option value='15'>15</option>
				<option value='20'>20</option>
			</StyledPaginationSelect>
			{currentPage > 1 && (
				<StyledPaginationButton onClick={() => handlePageChange(currentPage - 1)}>{'<'}</StyledPaginationButton>
			)}
			{pageButtons}
			{currentPage < totalPages && (
				<StyledPaginationButton onClick={() => handlePageChange(currentPage + 1)}>{'>'}</StyledPaginationButton>
			)}
		</SyledPagination>
	);
};

export default Pagination;
