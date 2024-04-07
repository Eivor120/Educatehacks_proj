import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { allocateDonation } from './donationAllocation'; // Import the AI algorithm function

const UserDetailsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [location, setLocation] = useState('');
  const [needReceipt, setNeedReceipt] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission here, e.g., send user details to backend

    // For demo purposes, log the user details
    console.log('Name:', name);
    console.log('Income:', income);
    if (income === 'Yes') {
      console.log('Income Amount:', incomeAmount);
    }
    console.log('Marital Status:', maritalStatus);
    console.log('Location:', location);
    console.log('Receipt Needed:', needReceipt);
    console.log('Email:', email);

    // Allocate donation amount to causes based on user details
    const donationAllocation = allocateDonation({
      name,
      income,
      incomeAmount: parseFloat(incomeAmount),
      maritalStatus,
      location,
      // needReceipt, 
      email,
    });
    
    // Navigate to the next screen after submitting the form
    // navigation.navigate('DonationAmountScreen', { donationAllocation });
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Income (Yes/No)"
        value={income}
        onChangeText={setIncome}
      />
      {income === 'Yes' && (
        <TextInput
          style={styles.input}
          placeholder="Income Amount"
          value={incomeAmount}
          onChangeText={setIncomeAmount}
          keyboardType="numeric"
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Marital Status"
        value={maritalStatus}
        onChangeText={setMaritalStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
});

export default UserDetailsScreen;
