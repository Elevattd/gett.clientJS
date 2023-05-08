import styled, { css } from 'styled-components';

const maxWidthSizes = {
	xs: 320,
	sm: 600,
	xl: 1200,
};

export const StyledButton = styled.button`
	background-color: ${({ main }) => (main ? '#ea7d1e' : 'transparent')};
	color: ${({ main }) => (main ? '#ffffff' : '#ea7d1e')};
	padding: 10px 20px;
	border: none;
	border-radius: ${({ main }) => (main ? '5px' : 'none')};
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	font-size: 16px;
	max-width: 100%;

	${({ maxWidth }) =>
		maxWidth === 'sm' &&
		css`
			font-size: 12px;
			padding: 8px 16px;
			max-width: ${maxWidthSizes.sm}px;
		`}

	${({ maxWidth }) =>
		maxWidth === 'xl' &&
		css`
			font-size: 24px;
			padding: 16px 32px;
			max-width: ${maxWidthSizes.xl}px;
		`}

  ${({ maxWidth }) =>
		maxWidth === 'xs' &&
		css`
			font-size: 10px;
			padding: 6px 12px;
			max-width: ${maxWidthSizes.xs}px;
		`}

  ${({ contained }) =>
		contained &&
		css`
			width: 100%;
		`}

  &:hover {
		background-color: ${({ main }) => (main ? '#000000' : 'transparent')};
		color: ${({ main }) => (main ? '#ffffff' : '#000000')};
		box-shadow: 0px 2px 0px rgba(0, 0, 0, 1);
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	max-width: 100%;
	${({ sx }) => sx};
`;
