import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	margin-bottom: 50px;

	${({ maxWidth }) => maxWidth === 'xs' && `max-width: 320px;`}
	${({ maxWidth }) => maxWidth === 'sm' && `max-width: 576px;`}
  ${({ maxWidth }) => maxWidth === 'md' && `max-width: 768px;`}
  ${({ maxWidth }) => maxWidth === 'lg' && `max-width: 992px;`}
  ${({ maxWidth }) => maxWidth === 'xl' && `max-width: 1200px;`}

  @media (min-width: 600px) {
		${({ maxWidth }) => maxWidth === 'xs' && `max-width: 540px;`}
	}

	@media (min-width: 960px) {
		${({ maxWidth }) => maxWidth === 'sm' && `max-width: 720px;`}
		${({ maxWidth }) => maxWidth === 'md' && `max-width: 960px;`}
    ${({ maxWidth }) => maxWidth === 'lg' && `max-width: 1140px;`}
	}

	@media (min-width: 1280px) {
		${({ maxWidth }) => maxWidth === 'xl' && `max-width: 1366px;`}
	}

	${({ sx }) => sx};
`;

export default StyledContainer;
