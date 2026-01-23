import React, { useContext } from "react";
import { 
  StyleSheet, View, Text, Image, TouchableOpacity, 
  TextInput, ScrollView, SafeAreaView, StatusBar, Dimensions 
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ProfileContext } from "./ProfileContext"; // Adjust the path as needed
import { supabase } from "./supabase"; // Adjust the import path for supabase

const { width } = Dimensions.get("window");

const Profile = ({ navigation }) => {
  const { profile, setProfile } = useContext(ProfileContext);
  const { imageUri, name, email, exercises } = profile;

  // Function to handle image selection
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Check for cancellation and update the global profile state
    if (!result.canceled) {
      setProfile({ ...profile, imageUri: result.assets[0].uri });
    }
  };

  // Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.replace("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.profileImageContainer}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.profileImage} />
              ) : (
                <Text style={styles.profileImageText}>Upload Photo</Text>
              )}
            </View>
          </TouchableOpacity>
          <TextInput
            style={styles.inputField}
            value={name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
            placeholder="Your Name"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            placeholder="Your Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        {/* Exercise History Section */}
        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>Exercise History</Text>
          {exercises.length === 0 ? (
            <Text style={styles.noExercisesText}>You haven't done any exercises yet.</Text>
          ) : (
            exercises.map((exercise, index) => (
              <View key={index} style={styles.exerciseCard}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDate}>{exercise.date}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Navigation Menu */}
      <View style={styles.navMenu}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.navText, styles.navTextActive]}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Text style={styles.navText}>GALLERY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.navText}>CONTACT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Recommendations")}
        >
          <Text style={styles.navText}>RECOMMEND</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3faf8",
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    padding: 20,
    alignItems: "center",
  },
  profileImageContainer: {
    backgroundColor: "#b2ddd6",
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  profileImageText: {
    color: "#233e3e",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputField: {
    width: width - 40,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  historySection: {
    padding: 20,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#233e3e",
    marginBottom: 10,
  },
  noExercisesText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
  exerciseCard: {
    backgroundColor: "#d8efea",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#233e3e",
  },
  exerciseDate: {
    fontSize: 14,
    color: "#3f8c85",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  navMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    paddingVertical: 10,
  },
  navText: {
    color: "#233e3e",
    fontWeight: "600",
    fontSize: 14,
  },
  navTextActive: {
    color: "#3f8c85",
  },
});

export default Profile;
