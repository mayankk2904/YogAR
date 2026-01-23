import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileProvider } from "./components/ProfileContext";
import { supabase } from "./components/supabase";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import RecommendationsScreen from './components/RecommendationsScreen';
import RecommendedPoses from './components/RecommendedPoses'; // Import the new component
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  checkAuth();

  // Listen for authentication changes
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user || null);
  });

  return () => {
    subscription?.unsubscribe();
  };
}, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Contact" component={Contact} />
              <Stack.Screen name="Gallery" component={Gallery} />
              <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
              <Stack.Screen name="RecommendedPoses" component={RecommendedPoses} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}