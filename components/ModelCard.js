import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";

const openYogaWebsite = () => {
  const websiteUrl = "3dmodelvercel.vercel.app";
  Linking.openURL(websiteUrl);
};

export default function ModelCard({ model }) {
  return (
    <TouchableOpacity style={styles.card} onPress={openYogaWebsite}>
      <Image source={model.image} style={styles.image} />
      <Text style={styles.name}>{model.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E293B",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 250, // Fixed width for proper carousel effect
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
