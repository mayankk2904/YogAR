import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RecommendedPoses = ({ route }) => {
  const { recommendations, formData } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recommended Yoga Poses</Text>
      
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Based on your profile:</Text>
        <Text>Age: {formData.age}</Text>
        <Text>Height: {formData.height} cm</Text>
        <Text>Weight: {formData.weight} kg</Text>
        <Text>Target Areas: {formData.targetAreas.join(', ')}</Text>
        <Text>Goal: {formData.weightGoal === 'lose' ? 'Weight Loss' : 'Muscle Gain'}</Text>
      </View>

      {recommendations.length > 0 ? (
        <View style={styles.poseGrid}>
          {recommendations.map((pose, index) => (
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
      ) : (
        <Text style={styles.noResults}>No recommendations found based on your profile</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f3faf8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#233e3e', paddingTop: 35 },
  summary: {
    backgroundColor: '#e8f4f3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: { fontWeight: '600', marginBottom: 5 },
  poseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  poseCard: {
    width: (width - 60) / 2,
    backgroundColor: '#d8efea',
    borderRadius: 20,
    padding: 12,
    marginBottom: 20,
  },
  poseImageContainer: {
    backgroundColor: '#b2ddd6',
    borderRadius: 16,
    padding: 8,
    marginBottom: 8,
  },
  poseImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  poseName: {
    color: '#233e3e',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});

export default RecommendedPoses;