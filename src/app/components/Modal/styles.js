import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ visible }) => (visible ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	position: relative;
	background-color: #fff;
	padding: 20px;
	border-radius: 5px;
	width: 80%;
	max-width: 500px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	color: #000;
	background: none;
	border: none;
	cursor: pointer;
`;
