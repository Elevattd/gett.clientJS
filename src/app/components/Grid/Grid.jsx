import React from 'react';
import { GridContainer } from './styles';

const Grid = ({ children, sx }) => {
	return <GridContainer sx={sx}>{children}</GridContainer>;
};

export default Grid;
