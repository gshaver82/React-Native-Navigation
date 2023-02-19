import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../styles/global';


//validation funky but works.
//something to do with on blur or on change
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short!')
        .required('Name is required'),
    phoneNumber: Yup.string()
        .min(10, 'Too short!')
        .max(10, 'Too long!')
        .required('Phone number is required')
        .test('is-num', 'Phone number must contain only numbers', (value) => {
            if (value) {
                return /^[0-9]+$/.test(value);
            }
            return true;
        }),
});

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ name: '', phoneNumber: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
            validateOnChange={true}
            validateOnBlur={true}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="name"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    { errors.name && (
                        <Text style={globalStyles.errorText}>{errors.name}</Text>
                    )}
                    <TextInput
                        style={globalStyles.input}
                        placeholder="phoneNumber"
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        keyboardType="numeric"
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                        <Text style={globalStyles.errorText}>{errors.phoneNumber}</Text>
                    )}
                    <TouchableOpacity
                        style={[globalStyles.TouchableOpacitybutton, { flexDirection: 'row' }]}
                        onPress={handleSubmit}
                        title="Sign Up"
                    >
                        <Text style={globalStyles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
};

export default SignupForm;
