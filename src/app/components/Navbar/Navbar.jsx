import React from 'react';
import { Logo, NavbarContainer } from './styles';
import logo_gett_pymes from '../../assets/logo_gett_pymes.png';

import Button from '../Button/Button';
import useNavbar from './useNavbar';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
	const [handleLogOut] = useNavbar();
	const [autenticate] = useAuth();

	return (
		<NavbarContainer>
			<Logo src={logo_gett_pymes}></Logo>
			<Button
				text={autenticate ? 'CERRAR SESIÓN.' : 'INFO.'}
				maxWidth='xs'
				contained
				// sx={{ paddingTop: '10px' }}
				onClick={handleLogOut}
			/>
		</NavbarContainer>
	);
};

export default Navbar;
