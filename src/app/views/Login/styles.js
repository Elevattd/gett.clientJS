import styled from 'styled-components';

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 400px;
	width: 100%;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;

	@media only screen and (max-width: 768px) {
		max-width: 300px;
	}
`;

const inputSizes = {
	small: {
		padding: '8px',
		fontSize: '0.875rem',
		borderRadius: '4px',
	},
	medium: {
		padding: '12px',
		fontSize: '1rem',
		borderRadius: '4px',
	},
	large: {
		padding: '16px',
		fontSize: '1.125rem',
		borderRadius: '4px',
	},
};

export const Input = styled.input`
	width: 100%;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	${({ size }) => inputSizes[size]};
	${({ sx }) => sx};
`;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #ea7d1e;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: black;
	}
`;
