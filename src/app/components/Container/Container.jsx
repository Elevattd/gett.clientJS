import React from 'react';
import StyledContainer from './styles';

const Container = ({ children, maxWidth = 'lg', sx }) => {
	return (
		<StyledContainer maxWidth={maxWidth} sx={sx}>
			{children}
		</StyledContainer>
	);
};

export default Container;
