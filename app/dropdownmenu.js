import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../components/common/header/screenheader.style';

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
        <Text>{selectedOption || 'Select an option'}</Text>
      </TouchableOpacity>

        <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'transparent' }}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)} style={styles.btnContainer}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
    
    </View>
  );
};

export default DropdownMenu;
// style={styles.btnContainer}
// style={{ padding: 10, borderWidth: 1, borderColor: 'gray' }}