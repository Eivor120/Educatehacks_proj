import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MissionStatementScreen = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('UserDetailsScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Donation Allocation Aid</Text>
      <Text style={styles.title}>Empowering philanthropy through seamless and hassle-free donation allocation.</Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
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
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop:130,
    textAlign: 'center',
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

export default MissionStatementScreen;
