import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import ModelCard from "";

const models = [
  // { 
  //   id: "1", 
  //   name: "Tree Pose", 
  //   file: require("../assets/animation1.glb"), 
  //   image: require("../assets/tree_pose.jpg")
  // },
  // { 
  //   id: "2", 
  //   name: "Warrior Pose", 
  //   file: require("../assets/animation1.glb"), 
  //   image: require("../assets/warrior_pose.jpg") 
  // },
  // { 
  //   id: "3", 
  //   name: "Downward Dog", 
  //   file: require("../assets/animation3.glb"), 
  //   image: require("../assets/downward_dog.png") 
  // },
];

export default function Models() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Yoga Poses in AR</Text>
      <FlatList
        data={models}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ModelCard model={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
});
