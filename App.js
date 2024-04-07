import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailsScreen from './UserDetailScreen';
import HomeScreen from './HomeScreen';
import DonationAmountScreen from './DonationAmountScreen';
// import AIDrivenSuggestionScreen from './donationAllocation';
import DistributionScreen from './DistributionScreen';
import MissionStatementScreen from './MissionStatementScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MissionStatement">
        <Stack.Screen name="MissionStatement" component={MissionStatementScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DonationAmount" component={DonationAmountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DonationAmountScreen" component={DonationAmountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DistributionScreen" component={DistributionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
