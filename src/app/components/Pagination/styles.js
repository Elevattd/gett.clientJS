import styled from 'styled-components';

export const SyledPagination = styled.div`
	margin-top: 20px;
`;

export const StyledPaginationButton = styled.button`
	background-color: #e0e0e0;
	color: orange;
	border-radius: 50%;
	border: none;
	width: 50px;
	height: 50px;
	font-size: 18px;
	margin: 0 5px;
	cursor: pointer;

	&.selected {
		background-color: black;
		color: white;
	}
`;

export const StyledPaginationSelect = styled.select`
	background-color: #f2f2f2;
	border: none;
	border-radius: 3px;
	padding: 5px;
	margin-left: 10px;
	color: #666;
	font-size: 16px;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 5px #f90;
	}
`;
