import React from 'react';
import LoginForm from './components/LoginForm';
import './LoginRoute.scss';
import { Row, Col } from 'antd';

function LoginRoute() {
	return (
		<Row type="flex" justify="center" className="LoginRoute">
			<Col xs={12}>
				<LoginForm />
			</Col>
		</Row>
	);
}

export default LoginRoute;
