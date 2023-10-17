// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { SignIn } from './screens/signin';
import { SignUp } from './screens/signup';
import { Home } from './screens/home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
   
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="home" options={{headerShown:false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
// <Stack.Screen name="signin" options={{headerShown:false}} component={SignIn} />
// <Stack.Screen name="signup" options={{headerShown:false}} component={SignUp} />