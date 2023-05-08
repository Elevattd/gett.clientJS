import React from 'react';
import Text from './styles';

const TextComponent = ({ text, variant, maxWidth, color, size, sx }) => {
	return (
		<>
			<Text variant={variant} maxWidth={maxWidth} color={color} fontSize={size} sx={sx}>
				{text}
			</Text>
		</>
	);
};

export default TextComponent;
