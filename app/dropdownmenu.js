import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './dropdownmenu.style';
import { Signup } from '../components/account/signup';
import { Login } from '../components/account/login';
import { Logout } from '../components/account/logout';

const DropdownMenu = ({ isVisible, toggleDropdown}) => {
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
      navigation.navigate( <Signup />); 
      break;
    case 'Login':
      navigation.navigate(<Login />); 
      break;
    case 'Logout':
      navigation.navigate(<Logout />);
      break;
    // Add cases for other options (e.g., 'Favorites') if needed
    default:
      break;
  }
};

  // const renderOptionComponent = () => {
  //   switch (selectedOption) {
  //     case 'Signup':
  //       return <Signup />;
  //     case 'Login':
  //       return <Login />;
  //     case 'Logout':
  //       return <Logout />;
  //     // Add cases for other options (e.g., 'Favorites') if needed
  //     default:
  //       return null;
  //   }
  // };

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
