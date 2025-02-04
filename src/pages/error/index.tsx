import React from 'react';
import { useRouteError } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const ErrorPage: React.FC = () => {
	const error = useRouteError() as any;

	return (
		<div className="flex flex-col items-center justify-center text-center px-6  h-screen">
			<AlertCircle size={50} className="text-red-500 mb-6" />

			<h1 className="text-5xl font-extrabold text-red-500">404</h1>
			<p className="text-lg mt-4">
				{error?.statusText ||
					error?.message ||
					"The page you were looking for doesn't exist / is yet to be created."}
			</p>
		</div>
	);
};

export default ErrorPage;
