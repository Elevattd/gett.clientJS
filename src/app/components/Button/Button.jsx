import React from 'react';
import { ButtonContainer, StyledButton } from './styles';

const Button = ({ text, main = true, maxWidth = 'sm', contained = false, sx, onClick }) => {
	return (
		<ButtonContainer sx={sx}>
			<StyledButton main={main} maxWidth={maxWidth} contained={contained} onClick={onClick}>
				{text}
			</StyledButton>
		</ButtonContainer>
	);
};

export default Button;
