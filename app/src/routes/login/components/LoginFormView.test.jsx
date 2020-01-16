import React from 'react';
import LoginFormView from './LoginFormView';
import { shallow, mount } from 'enzyme';
import * as LoginFormMessage from '../../../i18n/LoginFormMessage';
import flushPomises from 'flush-promises';

describe('LoginFormView test unit', () => {
	const props = {
		onSubmit: jest.fn(),
		isEmailValid: jest.fn()
	};
	const idEmail = 'Input[id="idEmail"]';
	const idButton = 'Button[id="idEnter"]';
	const idTitleProject = 'h1[id="idTitleProject"]';
	const idTitleEnterEmail = 'h3[id="idTitleEnterEmail"]';

	it('should exists component', () => {
		const component = componentInstanceFunctionEmpty();
		expect(component.exists()).toBe(true);
	});

	it('should have placeHolder of email with string user @ ab-inb ... ', () => {
		const component = componentInstanceFunctionEmpty().dive();
		expect(component.find(idEmail).prop('placeholder')).toBe('user@ab-inb...');
	});

	it('should be a button with type submit', () => {
		const component = componentInstanceFunctionEmpty().dive();
		expect(component.find(idButton).prop('htmlType')).toBe('submit');
	});

	it('should have title B2B Admin Portal', () => {
		const component = componentInstanceFunctionEmpty().dive();
		expect(component.find(idTitleProject).text()).toBe(LoginFormMessage.TITLE_LOGIN);
	});

	it('should have subTitle Enter Your E-mail ', () => {
		const component = componentInstanceFunctionEmpty().dive();
		expect(component.find(idTitleEnterEmail).text()).toBe(LoginFormMessage.LABEL_EMAIL_INPUT);
	});

	it('should simulate click in button enter when input is empty and show message Required', async () => {
		const component = componentInstanceValidEmail(false);
		component.find('form').simulate('submit');
		await flushPomises();
		component.update();
		expect(component.find('.ant-form-explain').text()).toBe('Required');
	});

	it('should simulate click in button enter when input have 123 and show message Invalid email', async () => {
		const component = componentInstanceValidEmail(true);
		const inputEmail = component.find('input[id="idEmail"]');
		inputEmail.simulate('change', { target: { name: 'email', value: 123 } });
		component.find('form').simulate('submit');
		await flushPomises();
		component.update();
		expect(component.find('.ant-form-explain').text()).toBe('Invalid email');
	});

	it('should simulate click in button enter when input have domain email diferente of ABI and show message This email cant be used to log in ', async () => {
		const component = componentInstanceValidEmail(false);
		const inputEmail = component.find('input[id="idEmail"]');
		inputEmail.simulate('change', { target: { name: 'email', value: 'teste@live.com' } });
		component.find('form').simulate('submit');
		await flushPomises();
		component.update();
		expect(component.find('.ant-form-explain').text()).toBe("This email can't be used to log in");
	});

	it('should simulate click in button enter when input have domain email equals of ABI Email valid  ', async () => {
		const component = componentInstanceValidEmail(true);
		const inputEmail = component.find('input[id="idEmail"]');
		inputEmail.simulate('change', { target: { name: 'email', value: 'teste@live.com' } });
		component.find('form').simulate('submit');
		await flushPomises();
		component.update();
		expect(component.find('.ant-form-explain').exists()).toBe(false);
	});

	it('should simulate onBlur in input when input is empty and show message Required', async () => {
		const component = componentInstanceValidEmail(true);
		const inputEmail = component.find('input[id="idEmail"]');
		inputEmail.simulate('blur');
		await flushPomises();
		component.update();
		expect(component.find('.ant-form-explain').text()).toBe('Required');
	});

	it('should simulate onBlur in input when input is 123 and show message Invalid email', async () => {
		const component = componentInstanceValidEmail(true);
		const inputEmail = component.find('input[id="idEmail"]');
		inputEmail.simulate('change', { target: { name: 'email', value: 123 } });
		inputEmail.simulate('blur');
		await flushPomises();
		component.update();
		expect(component.find('.ant-form-explain').text()).toBe('Invalid email');
	});

	function componentInstanceFunctionEmpty() {
		return shallow(<LoginFormView {...props} />);
	}

	function componentInstanceValidEmail(valid) {
		props.isEmailValid.mockReturnValue(valid);
		return mount(<LoginFormView onSubmit={props.onSubmit} isEmailValid={props.isEmailValid} />);
	}
});
