import axios from "axios";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    try {
        const response = await axios.post("http://localhost:3000/users.json", {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
        });
        console.log(response.data);
        Alert.alert('Signup Successful')
    } catch (error) {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        Alert.alert('Signup failed')
    }
};

  return (
    <View>
        <Text> Signup </Text>
        <View>
            <Text>Name</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />
        </View>
        <View>
            <Text>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
            />
        </View>
        <View>
            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
        </View>
        <View>
            <Text>Password Confirmation</Text>
            <TextInput
                value={passwordConfirmation}
                onChangeText={setPasswordConfirmation}
                placeholder="Enter your password confirmation"
                secureTextEntry
            />
        </View>
        <TouchableOpacity onPress={handleSubmit}>
            <Text>Signup</Text>
        </TouchableOpacity>
        <View>
            <Text>Error</Text>
            {errors.map((error, index) => (
            <Text key={index}>{error}</Text>
        ))}
        </View>
    </View>
  ); 
 };


export default Signup;