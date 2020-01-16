import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
import * as AuthService from '../../../services/auth/AuthService';

jest.mock('../../../services/auth/AuthService');

describe('LoginForm', () => {
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<LoginForm />);
	});

	it('should LoginForm be instantiated correctly', () => {
		expect(wrapper).toBeDefined();
	});

	it('should set the onSubmit prop correctly', () => {
		expect(wrapper.prop('onSubmit')).toBeDefined();
	});

	it('should onSubmit do nothing when it was called', () => {
		expect(wrapper.prop('onSubmit')('email@email.com'));
	});

	it('isEmailValid was defined', () => {
		expect(wrapper.prop('isEmailValid')).toBeDefined();
	});

	it('should validate that teste@gmail.com is an invalid email', () => {
		expect(wrapper.prop('isEmailValid')('teste@gmail.com')).toBe(false);
	});

	it('should validate that teste@yahoo.com is an invalid email', () => {
		expect(wrapper.prop('isEmailValid')('teste@yahoo.com')).toBe(false);
	});

	it('should validate that teste@email.com is an invalid email', () => {
		expect(wrapper.prop('isEmailValid')('teste@email.com')).toBe(false);
	});

	it('should validate that @anheuser-busch.com is a valid domain', () => {
		expect(wrapper.prop('isEmailValid')('teste@anheuser-busch.com')).toBe(true);
	});

	it('should validate that @ab-inbev.com is a valid domain', () => {
		expect(wrapper.prop('isEmailValid')('teste@ab-inbev.com')).toBe(true);
	});

	it('should validate that @cnd.com.do is a valid domain', () => {
		expect(wrapper.prop('isEmailValid')('teste@cnd.com.do')).toBe(true);
	});

	it('should validate that @fuzzproductions.com is a valid domain', () => {
		expect(wrapper.prop('isEmailValid')('teste@fuzzproductions.com')).toBe(true);
	});

	it('should validate that @gmodelo.com.mx is a valid domain', () => {
		expect(wrapper.prop('isEmailValid')('teste@gmodelo.com.mx')).toBe(true);
	});

	it('should validate called onSubmit once', () => {
		AuthService.login = jest.fn();
		expect(wrapper.prop('onSubmit')('email@email.com'));
		expect(AuthService.login).toHaveBeenCalledTimes(1);
		expect(AuthService.login).toHaveBeenCalledWith('email@email.com');
	});
});
