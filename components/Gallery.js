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
  Image,
  Modal,
} from "react-native";

const { width } = Dimensions.get("window");

// Sample yoga poses data grouped by category
const yogaPoses = [
  {
    category: "Standing",
    poses: [
      {
        name: "Warrior I Pose",
        image:
          "https://yogapractice.com/wp-content/uploads/2020/07/The-Ultimate-Guide-To-Warrior-I-Pose-%E2%80%94-Virabhadrasana-I.jpg",
        description:
          "Warrior I is a foundational standing pose that builds strength and stamina while opening the hips and chest.",
      },
      {
        name: "Warrior II Pose",
        image:
          "https://static.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
        description:
          "Warrior II improves balance and stability while stretching the legs and opening the hips.",
      },
    ],
  },
  {
    category: "Sitting",
    poses: [
      {
        name: "Lotus Pose",
        image:
          "https://i.pinimg.com/originals/2f/82/2e/2f822eb1965ee61d8318dd8d0e6311bb.jpg",
        description:
          "Lotus Pose is a meditative seated posture that calms the mind, improves posture, and enhances flexibility in the hips.",
      },
      {
        name: "Butterfly Pose",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.b2P4b6YDaJ1Mn-w6bwCW0gHaEp&pid=Api&P=0&h=180",
        description:
          "Butterfly Pise is a comfortable seated position ideal for leg flexibility and breathing exercises.",
      },
    ],
  },
  {
    category: "Twisting",
    poses: [
      {
        name: "Seated Twist",
        image:
          "https://images.squarespace-cdn.com/content/v1/5b636f1c5cfd79ab80c2a1b8/1598921779955-NRBBI6PW34MFODA1FUBV/IMG_4436.JPG",
        description:
          "Seated Twist helps massage the abdominal organs, improve digestion, and increase spinal mobility.",
      },
      {
        name: "Revolved Half Moon Pose",
        image:
          "https://www.fitsri.com/wp-content/uploads/2020/03/Revolved-Half-Moon-Pose-1024x683.jpg",
        description:
          "Revolved Half Moon Pose provides a deep twist, stretching the legs and spine while enhancing balance.",
      },
    ],
  },
];

const Gallery = ({ navigation }) => {
  const [selectedPose, setSelectedPose] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (pose) => {
    setSelectedPose(pose);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPose(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Yoga Poses</Text>
        {yogaPoses.map((categoryItem, idx) => (
          <View key={idx} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{categoryItem.category}</Text>
            <View style={styles.poseGrid}>
              {categoryItem.poses.map((pose, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.poseCard}
                  onPress={() => openModal(pose)}
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
        ))}
      </ScrollView>

      {/* Modal for Pose Details */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedPose && (
              <>
                <Image
                  source={{ uri: selectedPose.image }}
                  style={styles.modalImage}
                  resizeMode="cover"
                />
                <Text style={styles.modalTitle}>{selectedPose.name}</Text>
                <Text style={styles.modalDescription}>
                  {selectedPose.description}
                </Text>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

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
          <Text style={[styles.navText, styles.navTextActive]}>GALLERY</Text>
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
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#233e3e",
    textAlign: "center",
    marginBottom: 20,
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3f8c85",
    marginBottom: 10,
  },
  poseGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  // --- Card styling copied from Home.js ---
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
  // --- Modal Styles ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#233e3e",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#3f8c85",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#3f8c85",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
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

export default Gallery;
