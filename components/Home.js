import React from "react";
import heroImage from "../assets/hero1.png"; // Update the path as needed
import { Linking } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";

const { width } = Dimensions.get("window");

const openYogaWebsite = () => {
  Linking.openURL("https://vrikshasana-sanketdk7s-projects.vercel.app/");
};

const OpenNataraj = () => {
  Linking.openURL("https://natarajsana-sanketdk7s-projects.vercel.app/");
};

const OpenEasy = () => {
  Linking.openURL("https://easy-pose-sanketdk7s-projects.vercel.app/");
};

const OpenTrikona = () => {
  Linking.openURL("https://trikonasana-pose-sanketdk7s-projects.vercel.app/");
};

const OpenGomukha = () => {
  Linking.openURL("https://gomukhasana-sanketdk7s-projects.vercel.app/");
};

const OpenPadma = () => {
  Linking.openURL("https://standingsplit-sanketdk7s-projects.vercel.app/");
};

const OpenSetu = () => {
  Linking.openURL("https://bridgepose-sanketdk7s-projects.vercel.app/");
};

const OpenSitup = () => {
  Linking.openURL("https://situps-animated-sanketdk7s-projects.vercel.app/");
};

const OpenPistol = () => {
  Linking.openURL("https://pikewalk-2f2f-sanketdk7s-projects.vercel.app/ ");
};

const OpenPike1 = () => {
  Linking.openURL("https://pikewalk-git-main-sanketdk7s-projects.vercel.app/");
};

const OpenPushup = () => {
  Linking.openURL("https://yoga-test.vercel.app/");
};

export default function Home({ navigation }) {

  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Navigation Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>YogAR</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>YOGA HEALS THE SOUL</Text>
            <Text style={styles.heroSubtitle}>
              Yoga is the essence of all that is pure and is the means of realizing the divine within. ~ Swami Vivekanand
            </Text>
            <Text style={styles.heroText}>
              Experience Yoga like never before - see 3D poses in real-time with augmented reality. Transform your yoga practice with YogAR!
            </Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMoreText}>READ MORE</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={heroImage}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Explore Section */}
        <View style={styles.exploreSection}>
          <Text style={styles.exploreTitle}>EXPLORE MORE</Text>
          <Text style={styles.exploreSubtitle}>Yog asanas</Text>
          <View style={styles.poseGrid}>
            {[
              { 
                name: "Vrikshasana", 
                image: "https://femina.wwmindia.com/content/2021/jul/tips-041626083390.jpg", 
                onPress: openYogaWebsite 
              },
              { 
                name: "Natarajasana", 
                image: "https://tse2.mm.bing.net/th?id=OIP.7D3ZN5e-dX6oJMVQfPiidAHaE8&pid=Api&P=0&h=180", 
                onPress: OpenNataraj 
              },
              { 
                name: "Trikonasana", 
                image: "https://www.yogateket.com/image/original/Triangle_pose.jpg", 
                onPress: OpenTrikona
              },
              { 
                name: "Easy Pose", 
                image: "https://www.fitsri.com/wp-content/uploads/2020/03/Easy-Pose-1.jpg", 
                onPress: OpenEasy
              },
              { 
                name: "Gomukhasana", 
                image: "https://tse3.mm.bing.net/th?id=OIP.CVxPQuU7mL_qQrNYqG9brQHaHa&pid=Api&P=0&h=180", 
                onPress: OpenGomukha
              },
              { 
                name: "Urdhva Prasarita Eka Padasana", 
                image: "https://tse3.mm.bing.net/th?id=OIP.O0Ab9mkkup5KmkAEPsPs0AHaE8&pid=Api&P=0&h=180", 
                onPress: OpenPadma
              },
              { 
                name: "Setu Bandhanasana", 
                image: "https://tse2.mm.bing.net/th?id=OIP.4oZJan64cnPymr-7Lyj0RgHaE8&pid=Api&P=0&h=180", 
                onPress: OpenSetu
              },
              { 
                name: "Sit Ups", 
                image: "https://tse3.mm.bing.net/th?id=OIP.qfwGOwatONBbNsxwkMUihAHaE0&pid=Api&P=0&h=180", 
                onPress: OpenSitup
              },
              { 
                name: "Pistol Pose", 
                image: "https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/1592499180308-PWK4XMON1RHHKLE3JJTV/Dylan+in+a+pistol+squat", 
                onPress: OpenPistol
              },
              { 
                name: "Pike Walk", 
                image: "https://i.ytimg.com/vi/6_xeoRwxqeY/maxresdefault.jpg", 
                onPress: OpenPike1
              },
              { 
                name: "Push Ups", 
                image: "https://blog.nasm.org/hubfs/Guide%20to%20Push%20ups%20Main%20Image.jpg", 
                onPress: OpenPushup
              },
            ].map((pose, index) => (
              <TouchableOpacity
                key={index}
                style={styles.poseCard}
                onPress={pose.onPress}
              >
                <View style={styles.poseImageContainer}>
                  <Image
                    source={{ uri: pose.image }}
                    style={styles.poseImage}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.poseName}>{pose.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Navigation Menu */}
      <View style={styles.navMenu}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.navText, styles.navTextActive]}>HOME</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3faf8",
    paddingTop: 20, // Prevents overlap with the status bar
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f3faf8",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#233e3e",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#233e3e",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchInput: {
    color: "white",
    width: 100,
    marginRight: 8,
  },
  searchIcon: {
    color: "white",
    fontSize: 16,
  },
  heroSection: {
    padding: 20,
  },
  heroContent: {
    marginBottom: 30,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#233e3e",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#3f8c85",
    marginBottom: 12,
  },
  heroText: {
    color: "#2a5b58",
    marginBottom: 20,
    lineHeight: 24,
  },
  readMoreButton: {
    borderWidth: 2,
    borderColor: "#233e3e",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "flex-start",
  },
  readMoreText: {
    color: "#233e3e",
    fontWeight: "600",
  },
  heroImage: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
  exploreSection: {
    padding: 20,
  },
  exploreTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#233e3e",
    textAlign: "center",
    marginBottom: 8,
  },
  exploreSubtitle: {
    fontSize: 18,
    color: "#3f8c85",
    textAlign: "center",
    marginBottom: 24,
  },
  poseGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  poseCard: {
    width: (width - 60) / 2,
    backgroundColor: "#d8efea",
    borderRadius: 20,
    padding: 12,
    marginBottom: 20,
  },
  poseImageContainer: {
    backgroundColor: "#b2ddd6",
    borderRadius: 16,
    padding: 8,
    marginBottom: 8,
  },
  poseImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  poseName: {
    color: "#233e3e",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
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
