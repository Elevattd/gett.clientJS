import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { CloseButton, ModalContainer, ModalOverlay } from './styles';

const Modal = ({ visible, onClose, children }) => {
	return (
		<ModalOverlay visible={visible}>
			<ModalContainer>
				<CloseButton onClick={onClose}>
					<FaTimes />
				</CloseButton>
				{children}
			</ModalContainer>
		</ModalOverlay>
	);
};

export default Modal;
