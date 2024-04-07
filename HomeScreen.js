import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedCauses, setSelectedCauses] = useState([]);

  // Function to handle tile selection
  const handleSelectCause = (cause) => {
    // If cause is already selected, unselect it
    if (selectedCauses.includes(cause)) {
      setSelectedCauses(selectedCauses.filter(item => item !== cause));
    } else { // If cause is not selected, select it
      setSelectedCauses([...selectedCauses, cause]);
    }
  };

  // Function to check if a cause is selected
  const isCauseSelected = (cause) => {
    return selectedCauses.includes(cause);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Cause</Text>
      <View style={styles.causeContainer}>
        <TouchableOpacity 
          style={[styles.causeItem, isCauseSelected('Cause 1') && styles.selectedItem]}
          onPress={() => handleSelectCause('Cause 1')}>
          <Text style={styles.causeTitle}>Cause 1</Text>
          <Text style={styles.causeName}>Environmental Conservation</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.causeItem, isCauseSelected('Cause 2') && styles.selectedItem]}
          onPress={() => handleSelectCause('Cause 2')}>
          <Text style={styles.causeTitle}>Cause 2</Text>
          <Text style={styles.causeName}>Education Access and Support</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.causeItem, isCauseSelected('Cause 3') && styles.selectedItem]}
          onPress={() => handleSelectCause('Cause 3')}>
          <Text style={styles.causeTitle}>Cause 3</Text>
          <Text style={styles.causeName}>Poverty Alleviation</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.causeItem, isCauseSelected('Cause 4') && styles.selectedItem]}
          onPress={() => handleSelectCause('Cause 4')}>
          <Text style={styles.causeTitle}>Cause 4</Text>
          <Text style={styles.causeName}>Health and Medical Research</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DonationAmount')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  causeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  causeItem: {
    width: 120,
    height: 120,
    backgroundColor: 'lightblue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'lightgreen', // Change color when selected
  },
  causeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  causeName: {
    fontSize: 16,
  },
});

export default HomeScreen;
