import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  Linking,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

const Contact = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  // Google Maps Embed URL for your team address. Customize as needed.
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.778416235933!2d73.86562340902853!3d18.46362188254645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e1!3m2!1sen!2sin!4v1742786004676!5m2!1sen!2sin";

  // Handle sending email via mailto link
  const handleSend = () => {
    if (!userName || !userEmail || !userMessage) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Query from ${userName}`);
    const body = encodeURIComponent(
      `Name: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMessage}`
    );
    const mailtoUrl = `mailto:mayank.kulkarni29@gmail.com?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl)
      .then(() => {
        // Optionally, clear the fields after opening the mail client
        setUserName("");
        setUserEmail("");
        setUserMessage("");
      })
      .catch(() => {
        Alert.alert("Error", "Could not open the mail client.");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={styles.scrollView}>
        {/* Contact Information Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactText}>
            Our team is located at:{"\n"}
            VIT, Upper Indira Nagar, Bibwewadi, Pune{"\n"}
            Phone: (+91) 9030773829{"\n"}
            Email: info@yogar.com
          </Text>
          <View style={styles.mapContainer}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: `<iframe src="${googleMapsEmbedUrl}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen></iframe>`,
              }}
              style={styles.webview}
            />
          </View>
        </View>

        {/* Contact Form Section */}
        <View style={styles.formSection}>
          <Text style={styles.formTitle}>Send us a Message</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Your Name"
            placeholderTextColor="#999"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Your Email"
            placeholderTextColor="#999"
            value={userEmail}
            onChangeText={setUserEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.inputField, styles.messageInput]}
            placeholder="Your Message"
            placeholderTextColor="#999"
            value={userMessage}
            onChangeText={setUserMessage}
            multiline={true}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
          <Text style={styles.navText}>PROFILE</Text>
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
          <Text style={[styles.navText, styles.navTextActive]}>CONTACT</Text>
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
  contactSection: {
    padding: 20,
  },
  contactTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#233e3e",
    marginBottom: 10,
    textAlign: "center",
  },
  contactText: {
    fontSize: 16,
    color: "#3f8c85",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  mapContainer: {
    height: 200,
    width: width - 40,
    borderRadius: 15,
    overflow: "hidden", // Clips the map to the rounded corners
    alignSelf: "center",
    marginBottom: 20,
  },
  webview: {
    flex: 1,
  },
  formSection: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#233e3e",
    marginBottom: 15,
    textAlign: "center",
  },
  inputField: {
    width: "100%",
    backgroundColor: "#f3faf8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#3f8c85",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  navMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {},
  navText: {
    color: "#233e3e",
    fontWeight: "600",
    fontSize: 14,
  },
  navTextActive: {
    color: "#3f8c85",
  },
});

export default Contact;
