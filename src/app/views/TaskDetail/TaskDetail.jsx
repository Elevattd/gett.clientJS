import React from 'react';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import useTaskDetail from './useTaskDetail';
import TextComponent from '../../components/TextComponent/TextComponent';
import { Input } from '../Login/styles';
import { StyledTextDetailCheck } from './styles';

const TaskDetail = ({ visible, onClose, edit, task }) => {
	const [taskToEdit, handleTaskEditChange, handleTaskConfirmUpdate, handleCompletedChange] = useTaskDetail({
		task,
		visible,
		onClose,
	});

	return (
		<Modal visible={visible} onClose={onClose}>
			{!edit ? (
				<>
					<TextComponent
						text={`TAREA: ${task.id}`}
						variant='h2'
						size='xl'
						sx={{ textAlign: 'center' }}
						color={'#ea7d1e'}
					/>
					<TextComponent text={task.title} variant='p' size='sm' sx={{ textAlign: 'center' }} />
					<TextComponent
						text={`USUARIO RESPONSABLE: ${task.userId}`}
						variant='p'
						size='sm'
						bold
						sx={{ paddingTop: '10px', textAlign: 'center' }}
					/>
					<TextComponent
						text={task.completed ? 'Tarea completada.' : 'Tarea por completar'}
						variant='h3'
						size='sm'
						color={task.completed ? 'green' : 'red'}
						sx={{ paddingTop: '10px', textAlign: 'center' }}
					/>
				</>
			) : (
				<>
					<TextComponent text={`Editar tarea: ${taskToEdit.id}`} variant='h2' maxWidth='xl' size='sm' />
					<Input
						type='input'
						name='title'
						placeholder='Descripcion'
						size={'small'}
						value={taskToEdit?.title}
						onChange={handleTaskEditChange}
						// sx={{ mt: '15px', width: '50vh', marginLeft: '10vh' }}
					/>
					<StyledTextDetailCheck>
						<TextComponent
							text={'Completar tarea'}
							variant='p'
							size='sm'
							// sx={{ paddingTop: '10px', textAlign: 'center' }}
						/>
						<Input
							type='checkbox'
							name='completed'
							placeholder='Tarea completa: '
							size={'small'}
							checked={taskToEdit?.completed}
							onChange={handleCompletedChange}
							sx={{ mt: '15px', width: '50vh', marginLeft: '10vh' }}
						/>
					</StyledTextDetailCheck>
					<Button
						text={'GUARDAR'}
						maxWidth='sm'
						contained
						sx={{ paddingTop: '10px' }}
						onClick={handleTaskConfirmUpdate}
					/>
				</>
			)}
		</Modal>
	);
};

export default TaskDetail;
