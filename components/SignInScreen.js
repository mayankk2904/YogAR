import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { supabase } from "./supabase"; // Import Supabase client
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Sign In Failed", error.message);
    } else {
      Alert.alert("Welcome back!");
      navigation.navigate("Home");
    }
  };

const handleGoogleSignIn = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: AuthSession.makeRedirectUri({ useProxy: true }),
        preferSignIn: true,  // Forces the account picker to show up
      },
    });

    if (error) {
      Alert.alert("Google Sign-In Failed", error.message);
      return;
    }

    // Fetch user session manually
    const { data: sessionData } = await supabase.auth.getSession();

    if (sessionData.session) {
      Alert.alert("Signed in with Google!");
      navigation.navigate("Home"); // Ensure navigation to Home screen
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Try again.");
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: 300, height: 40, borderBottomWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
  button: { backgroundColor: "#233e3e", padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: "white", fontWeight: "bold" },
  googleButton: { backgroundColor: "#db4437", padding: 10, borderRadius: 5, marginTop: 10 },
  googleButtonText: { color: "white", fontWeight: "bold" },
  linkText: { marginTop: 10, color: "#233e3e" },
});