import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const YourComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Itt a navigáció meghívása a kívánt úticélra.
    navigation.navigate('Uticél');
  };

  return (
    <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row' }]}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>
          Tesco
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // Egyéb stílusok...
  },
  text: {
    // Egyéb szöveg stílusok...
  },
});

export default YourComponent;
