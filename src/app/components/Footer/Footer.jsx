import React from 'react';
import { BottomNavContainer, CopyrightText } from './styles';
import styled from 'styled-components';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const IconContainer = styled.div`
	display: flex;
`;

const IconLink = styled.a`
	margin-left: 10px;
	color: #808080;
	font-size: 18px;
`;

const Footer = () => {
	return (
		<BottomNavContainer>
			<CopyrightText>&copy; 2023 - Todos los derechos reservados</CopyrightText>
			<IconLink href='https://github.com/Elevattd' target='_blank'>
				<FaGithub />
			</IconLink>
			<IconLink href='https://www.linkedin.com/in/mariano-dunand/' target='_blank'>
				<FaLinkedin />
			</IconLink>
		</BottomNavContainer>
	);
};

export default Footer;
