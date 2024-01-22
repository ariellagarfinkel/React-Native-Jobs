import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './dropdownmenu.style';
import { useNavigation } from '@react-navigation/native';
import { Signup } from '../components/account/signup';
import { Login } from '../components/account/login';
import { Logout } from '../components/account/logout';
import { Favorites } from '../components/account/favorites';

const DropdownMenu = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Signup', 'Login', 'Logout', 'Favorites'];
  const navigation = useNavigation();

    const showAlert = () => alert("Alert")
  


  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
};

return (
  <View style={{ padding: 20, display: isVisible ? 'flex' : 'none' }}>
      <View style={{ marginTop: 10, flexDirection: 'row', borderColor: 'transparent' }}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={ () => navigation(option)} style={styles.btnContainer}>
            <Text style={styles.btnText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
  </View>
);
};

export default DropdownMenu;
