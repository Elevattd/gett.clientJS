import styled from 'styled-components';

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #dfe0e1;
	color: #fff;
	max-width: 100%; /* Agregamos un ancho máximo */

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	/* size: auto; */
`;

export const LogoutButton = styled.button`
	background-color: #ea7d1e;
	color: #ffff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	@media only screen and (max-width: 768px) {
		margin-top: 10px;
	}
`;
