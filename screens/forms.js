import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <Button
                        title="Sign Up"
                        onPress={handleSubmit}
                        style={globalStyles.button}
                    />
                </View>
            )}
        </Formik>
    );
};

export default SignupForm;
