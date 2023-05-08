import styled, { css } from 'styled-components';

const maxWidthSizes = {
	xs: 320,
	sm: 600,
	xl: 1200,
};

const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '20px',
	xl: '24px',
};

const fontWeights = {
	light: 300,
	regular: 400,
	bold: 700,
};

const headingStyles = css`
	margin-bottom: 10px;
`;

const h1Styles = css`
	font-size: ${fontSizes.xl};
	font-weight: ${fontWeights.bold};
	${headingStyles}
`;

const h2Styles = css`
	font-size: ${fontSizes.lg};
	font-weight: ${fontWeights.bold};
	${headingStyles}
`;

const h3Styles = css`
	font-size: ${fontSizes.md};
	font-weight: ${fontWeights.bold};
	${headingStyles}
`;

const h4Styles = css`
	font-size: ${fontSizes.sm};
	font-weight: ${fontWeights.bold};
	${headingStyles}
`;

const pStyles = css`
	font-size: ${fontSizes.md};
	font-weight: ${fontWeights.regular};
`;

const Text = styled.div`
	${({ variant }) => variant === 'h1' && h1Styles}
	${({ variant }) => variant === 'h2' && h2Styles}
	${({ variant }) => variant === 'h3' && h3Styles}
	${({ variant }) => variant === 'h4' && h4Styles}
	${({ variant }) => variant === 'p' && pStyles}
	${({ maxWidth }) => maxWidth && `max-width: ${maxWidthSizes[maxWidth]}px;`}
	${({ color }) => color && `color: ${color};`}
	${({ fontSize }) => fontSize && `font-size: ${fontSizes[fontSize]};`}
  ${({ sx }) => sx};
`;

export default Text;
