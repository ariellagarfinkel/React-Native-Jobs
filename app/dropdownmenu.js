import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './dropdownmenu.style';
import { Signup } from '../components/account/signup';
import { Login } from '../components/account/login';
import { Logout } from '../components/account/logout';
import { Favorites } from '../components/account/favorites';

const DropdownMenu = ({ isVisible, toggleDropdown, navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Signup', 'Login', 'Logout', 'Favorites'];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();

  switch (option) {
    case 'Signup':
      navigation.navigate( 'Signup'); 
      break;
    case 'Login':
      navigation.navigate('Login'); 
      break;
    case 'Logout':
      navigation.navigate('Logout');
      break;
    case 'Favorites':
      navigation.navigate('Favorites');
      break;
    default:
      break;
  }
};

  return (
    <View style={{ padding: 20, display: isVisible ? 'flex' : 'none' }}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.btnContainer}>
      </TouchableOpacity>

        <View style={{ marginTop: 10, flexDirection: 'row', borderColor: 'transparent' }}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)} style={styles.btnContainer}>
              <Text style={styles.btnText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
    
    </View>
  );
};

export default DropdownMenu;
