import ErrorPage from '@/pages/error';
import RootLayout from '@/layout/root-layout';
import Home from '@/pages/home';
const routeConfig = [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
];

export default routeConfig;
