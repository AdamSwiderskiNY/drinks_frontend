import { useState } from 'react';
import {Grid, Grid2, Typography} from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import AuthService from '../service/AuthService';



function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    return (
        <>
            <div>
                <Grid2 container>
                    <Grid2 item xs={12}>
                        <Typography>Form here</Typography>
                        <Formik
                            initialValues={{ name: "", password: "" }}
                            enableReinitialize
                            validate={(values) => {
                                const errors: { name?: string } = {};

                                if (!values.name) {
                                    errors.name = "Required";
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log("submitting....")
                                console.log(values)
                                // setTimeout(() => {
                                //   alert(JSON.stringify(values, null, 2));
                                //   setSubmitting(false);
                                // }, 400);

                                // TODO login

                                const params = {
                                    "name" : values.name,
                                    "password" : values.password
                                }

                                AuthService().login(params).then( (result) => {
                                    console.log("success")
                                    navigate('/home', { replace : true})
                                })
                                    .catch ( error => {
                                        console.log(error)
                                    })
                                //navigate('/home', {replace : true} )

                            }}
                        >
                            {({ isSubmitting, isValid }) => (
                                <Form name='form'>
                                    <label htmlFor="name">Username:</label>
                                    <Field type="name" name="name" />
                                    <ErrorMessage name="name" component="div" />
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" />
                                    <button type="submit" disabled={ !isValid}>
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>

                    </Grid2>
                </Grid2>
            </div>
        </>
    )
}

export default Login
