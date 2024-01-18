import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './dropdownmenu.style';

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
