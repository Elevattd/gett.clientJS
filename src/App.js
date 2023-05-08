import './App.css';
import 'react-notifications/lib/notifications.css';
import Home from './app/views/Home/Home';
import Login from './app/views/Login/Login';
import Layout from './app/views/Layout/Layout';
import useAuth from './hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasks } from './redux/actions/tasks';
import { setCrendentials } from './redux/actions/auth';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './app/components/Footer/Footer';

function App() {
	const dispatch = useDispatch();
	const [autenticate] = useAuth();

	useEffect(() => {
		const userJson = localStorage.getItem('user');
		const user = userJson ? JSON.parse(userJson) : null;
		if (user) {
			dispatch(setCrendentials(user, 'cookies'));
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		dispatch(getAllTasks);
		// eslint-disable-next-line
	}, [autenticate]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' element={autenticate ? <Home /> : <Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<NotificationContainer />
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
