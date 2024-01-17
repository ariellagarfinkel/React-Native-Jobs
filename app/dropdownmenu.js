import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={handleToggle} style={{ padding: 10, borderWidth: 1, borderColor: 'gray' }}>
        <Text>{selectedOption || 'Select an option'}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'gray' }}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)} style={{ padding: 10 }}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropdownMenu;
