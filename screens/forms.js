import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ name : '', phoneNumber: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="name"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="phoneNumber"
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        keyboardType="numeric"
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
