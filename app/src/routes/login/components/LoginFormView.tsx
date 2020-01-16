import React from 'react'
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import * as yup from 'yup';
import * as LoginFormMessage  from '../../../i18n/LoginFormMessage';
import { Input, Button, Card, Form } from 'antd';

interface Props {
    onSubmit: (email: string) => void;
    isEmailValid: (email: string) => boolean;
}

interface Error {
    email?: string;
}
const schemaEmailEmpty = yup.string().required();
const schemaEmailFormat = yup.string().email();

interface FormData {
    email: string;
}

const validateEmail = (email: string, isEmailValid: (email: string) => boolean): string | undefined => {
    if (!schemaEmailEmpty.isValidSync(email)) {
        return LoginFormMessage.MESSAGE_REQUIRED;
    } else if (!schemaEmailFormat.isValidSync(email)) {
        return LoginFormMessage.MESSAGE_INVALID_EMAIL;
    } else if (!isEmailValid(email)) {
        return LoginFormMessage.MESSAGE_NOT_ALLOWED_EMAIL
    }
    return undefined;
}

function LoginFormView(props: Props) {
    

    const onSubmit = (values: FormData, actions: FormikActions<FormData>) => {
        props.onSubmit(values.email)
        actions.setSubmitting(false);
    }

    const validate = (values: FormData) => {
        const errors = {} as Error;
        const returnValidate = validateEmail(values.email, props.isEmailValid) 
        if(returnValidate){
            errors.email = returnValidate;
        }
        return errors;
    }

    const renderHtml = (propsFormik: FormikProps<FormData>) => {
        return <FormikForm>
            <Card>
                <h1 id="idTitleProject">{LoginFormMessage.TITLE_LOGIN}</h1>
                <h3 id="idTitleEnterEmail">{LoginFormMessage.LABEL_EMAIL_INPUT}</h3>
                <Form.Item validateStatus={propsFormik.errors.email && propsFormik.touched.email ? "error" : "success"} help={propsFormik.touched.email && propsFormik.errors.email}>
                    <Input type="text" name="email" placeholder={LoginFormMessage.PLACEHOLDER_EMAIL} id="idEmail"
                        value={propsFormik.values.email}
                        onChange={propsFormik.handleChange}
                        onBlur={propsFormik.handleBlur} />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" id="idEnter">Enter</Button>
                </Form.Item>
            </Card>
        </FormikForm>
    }

    return <Formik initialValues={{ email: '' }}
        onSubmit={onSubmit}
        validate={validate}
        render={renderHtml}
    />
}

export default LoginFormView;
