import styled from 'styled-components';

export const GridContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 150vh;
	width: 100%;
	padding: 0 5%;
	margin: 0;
	${({ sx }) => sx};
	/* background-color: red; */
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: 20px;
	padding: 20px;
	background-color: ${({ complete }) => (complete ? '#C9F9C9' : '#F9C9C9')};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 5px;

	@media only screen and (max-width: 768px) {
		width: 100%;
		margin: 10px 0;
	}
	${({ sx }) => sx};
`;

export const BoxHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CloseButton = styled.button`
	background: none;
	color: #ff5555;
	font-size: 20px;
	border: none;
	cursor: pointer;
`;
