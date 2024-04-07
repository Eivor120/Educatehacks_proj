import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DistributionScreen = ({ route }) => {
  const { donationAmount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distribution Details</Text>
      <Text>The donation amount of ${donationAmount} will be thoughtfully distributed among various causes, leveraging technology to ensure the most impactful and innovative allocation strategy.</Text>
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
});

export default DistributionScreen;
