import { Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<>
			<a href="#main" className="skip-link">
				Skip to content
			</a>
			<Outlet />
		</>
	);
}
