import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ name: '', phoneNumber: '' }}
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
