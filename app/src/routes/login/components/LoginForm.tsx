import React from 'react';
import LoginFormView from './LoginFormView';
import * as AuthService from '../../../services/auth/AuthService';

const validDomains = /@?(anheuser-busch.com|ab-inbev.com|cnd.com.do|cnd.com.do|gmodelo.com.mx|fuzzproductions.com)/;
function LoginForm() {
	const onSubmit = (email: string): void => {
		AuthService.login(email);
	};

	const isEmailValid = (email: string): boolean => {
		return email.match(validDomains) !== null;
	};

	return <LoginFormView onSubmit={onSubmit} isEmailValid={isEmailValid} />;
}

export default LoginForm;
