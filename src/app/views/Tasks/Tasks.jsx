import React from 'react';
import Grid from '../../components/Grid/Grid';
import Button from '../../components/Button/Button';
import useTasks from './useTasks';
import TaskDetail from '../TaskDetail/TaskDetail';
import TextComponent from '../../components/TextComponent/TextComponent';
import { Box, BoxHeader, CloseButton } from '../../components/Grid/styles';
import useGlobalTasks from '../../../hooks/useGlobalTasks';
import { RiCloseCircleLine } from 'react-icons/ri';

const Tasks = () => {
	const { taskToShow } = useGlobalTasks();

	const [visible, edit, handleEditAndOpenModal, handleCloseAndCleanState, handleOpenModal, task, handleXClick] =
		useTasks();

	return (
		<Grid sx={{ marginBottom: '20px' }}>
			{taskToShow?.map((card) => (
				<Box key={card.id} complete={card.completed}>
					<BoxHeader>
						<TextComponent text={`Tarea: ${card.id}`} variant='h2' maxWidth='xl' size='sm' />
						<CloseButton onClick={() => handleXClick(card.id)}>{<RiCloseCircleLine />} </CloseButton>
					</BoxHeader>
					<TextComponent text={card.title.substring(0, 15) + ' ...'} variant='p' maxWidth='xl' size='xl' />
					<TextComponent
						text={`Usuario resposable: ${card.userId}`}
						variant='p'
						maxWidth='xl'
						size='xs'
						sx={{ paddingTop: '10px' }}
					/>
					<Button
						text={'MODIFICAR.'}
						maxWidth='sm'
						contained
						main={false}
						sx={{ paddingTop: '10px' }}
						onClick={() => handleEditAndOpenModal(card)}
					/>
					<Button
						text={'VER DETALLES.'}
						maxWidth='sm'
						contained
						sx={{ paddingTop: '10px' }}
						onClick={() => handleOpenModal(card)}
					/>
				</Box>
			))}
			<TaskDetail visible={visible} onClose={handleCloseAndCleanState} edit={edit} task={task}></TaskDetail>
		</Grid>
	);
};

export default Tasks;
