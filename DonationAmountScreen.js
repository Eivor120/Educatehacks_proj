import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DonationAmountScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [recurring, setRecurring] = useState(false); // State to track recurring donation option

  const handleDonate = () => {
    // Ensure that the amount is valid
    if (!amount || isNaN(amount)) {
      // Show alert if the amount is invalid or empty
      Alert.alert('Error', 'Please enter a valid donation amount');
      return;
    }

    // Handle donation submission, e.g., send donation amount to backend
    console.log('Donating $', amount);

    // Navigate to DistributionScreen after confirming the donation and pass the amount and recurring option as parameters
    navigation.navigate('DistributionScreen', { donationAmount: amount, recurring });
    // navigation.navigate('DistributionScreen')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Donation Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      {/* Add options for recurring donation */}
      <View style={styles.recurringContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => setRecurring(!recurring)}>
          {recurring && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.recurringText}>Daily</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>Confirm Donation</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  recurringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recurringText: {
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 12,
  },
});

export default DonationAmountScreen;
