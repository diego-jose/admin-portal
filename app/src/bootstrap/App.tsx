import React from 'react';
import './App.css';
import AppRouter from '../routes/AppRouter';

interface Props {
	onSubmit: (email: string) => void;
	isEmailValid: (email: string) => boolean;
}

const App: React.FC = () => {
	return <AppRouter />;
};

export default App;
