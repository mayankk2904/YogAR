import React, { useState, useRef, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { Animated, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Linking, StatusBar,   KeyboardAvoidingView,
  Platform,
  Image } from 'react-native';

const yogaPoses = [
  {
    name: 'Vrikshasana',
    difficulty: 'Beginner',
    focus: ['Balance', 'Legs'],
    benefits: ['Mental Stability', 'Concentration'],
    contraindications: ['Knee Injuries', 'Low Blood Pressure'],
    intensity: 'Low',
    calories: 100,
    image: 'https://femina.wwmindia.com/content/2021/jul/tips-041626083390.jpg',
    onPress: () => Linking.openURL('https://vrikshasana-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Natarajasana',
    difficulty: 'Intermediate',
    focus: ['Balance', 'Flexibility'],
    benefits: ['Posture Improvement', 'Core Strength'],
    contraindications: ['Low Blood Pressure', 'Ankle Injuries'],
    intensity: 'Medium',
    calories: 150,
    image: 'https://tse2.mm.bing.net/th?id=OIP.7D3ZN5e-dX6oJMVQfPiidAHaE8&pid=Api&P=0&h=180',
    onPress: () => Linking.openURL('https://natarajsana-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Trikonasana',
    difficulty: 'Intermediate',
    focus: ['Flexibility', 'Core'],
    benefits: ['Digestion', 'Spine Health'],
    contraindications: ['Neck Injuries', 'Low Blood Pressure'],
    intensity: 'Medium',
    calories: 120,
    image: 'https://www.yogateket.com/image/original/Triangle_pose.jpg',
    onPress: () => Linking.openURL('https://trikonasana-pose-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Easy Pose',
    difficulty: 'Beginner',
    focus: ['Meditation', 'Hips'],
    benefits: ['Stress Relief', 'Posture'],
    contraindications: ['Knee Injuries'],
    intensity: 'Low',
    calories: 80,
    image: 'https://www.fitsri.com/wp-content/uploads/2020/03/Easy-Pose-1.jpg',
    onPress: () => Linking.openURL('https://easy-pose-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Gomukhasana',
    difficulty: 'Intermediate',
    focus: ['Hips', 'Shoulders'],
    benefits: ['Flexibility', 'Posture'],
    contraindications: ['Shoulder Injuries', 'Knee Injuries'],
    intensity: 'Medium',
    calories: 110,
    image: 'https://tse3.mm.bing.net/th?id=OIP.CVxPQuU7mL_qQrNYqG9brQHaHa&pid=Api&P=0&h=180',
    onPress: () => Linking.openURL('https://gomukhasana-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Urdhva Prasarita Eka Padasana',
    difficulty: 'Advanced',
    focus: ['Balance', 'Legs'],
    benefits: ['Core Strength', 'Flexibility'],
    contraindications: ['Low Blood Pressure', 'Hip Injuries'],
    intensity: 'High',
    calories: 180,
    image: 'https://tse3.mm.bing.net/th?id=OIP.O0Ab9mkkup5KmkAEPsPs0AHaE8&pid=Api&P=0&h=180',
    onPress: () => Linking.openURL('https://standingsplit-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Setu Bandhanasana',
    difficulty: 'Intermediate',
    focus: ['Back', 'Hips'],
    benefits: ['Spine Health', 'Stress Relief'],
    contraindications: ['Neck Injuries', 'Shoulder Injuries'],
    intensity: 'Medium',
    calories: 130,
    image: 'https://tse2.mm.bing.net/th?id=OIP.4oZJan64cnPymr-7Lyj0RgHaE8&pid=Api&P=0&h=180',
    onPress: () => Linking.openURL('https://bridgepose-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Sit Ups',
    difficulty: 'Beginner',
    focus: ['Core', 'Abs'],
    benefits: ['Core Strength', 'Weight Loss'],
    contraindications: ['Back Pain'],
    intensity: 'High',
    calories: 200,
    image: 'https://tse3.mm.bing.net/th?id=OIP.qfwGOwatONBbNsxwkMUihAHaE0&pid=Api&P=0&h=180',
    onPress: () => Linking.openURL('https://situps-animated-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Pistol Pose',
    difficulty: 'Advanced',
    focus: ['Legs', 'Balance'],
    benefits: ['Leg Strength', 'Core Stability'],
    contraindications: ['Knee Injuries', 'Ankle Injuries'],
    intensity: 'High',
    calories: 220,
    image: 'https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/1592499180308-PWK4XMON1RHHKLE3JJTV/Dylan+in+a+pistol+squat',
    onPress: () => Linking.openURL('https://pikewalk-2f2f-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Pike Walk',
    difficulty: 'Intermediate',
    focus: ['Core', 'Flexibility'],
    benefits: ['Core Strength', 'Balance'],
    contraindications: ['Back Pain', 'Hip Injuries'],
    intensity: 'Medium',
    calories: 150,
    image: 'https://i.ytimg.com/vi/6_xeoRwxqeY/maxresdefault.jpg',
    onPress: () => Linking.openURL('https://pikewalk-git-main-sanketdk7s-projects.vercel.app/'),
  },
  {
    name: 'Push Ups',
    difficulty: 'Intermediate',
    focus: ['Arms', 'Chest'],
    benefits: ['Upper Body Strength', 'Weight Loss'],
    contraindications: ['Shoulder Injuries', 'Wrist Pain'],
    intensity: 'High',
    calories: 180,
    image: 'https://blog.nasm.org/hubfs/Guide%20to%20Push%20ups%20Main%20Image.jpg',
    onPress: () => Linking.openURL('https://yoga-test.vercel.app/'),
  },
];

const ThinkingAnimation = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = (dot) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      );
    };

    const animation1 = animate(dot1);
    const animation2 = animate(dot2);
    const animation3 = animate(dot3);

    Animated.stagger(100, [animation1, animation2, animation3]).start();
  }, []);

  const translateY = (dot) => dot.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <View style={styles.thinkingContainer}>
      <Animated.View style={[styles.dot, { transform: [{ translateY: translateY(dot1) }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: translateY(dot2) }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: translateY(dot3) }] }]} />
    </View>
  );
};

const MessageComponent = React.memo(({ item }) => (
  <View style={[
    styles.messageContainer,
    item.isBot ? styles.botMessage : styles.userMessage
  ]}>
    {item.isRecommendation ? (
      <TouchableOpacity 
        style={styles.recommendationCard}
        onPress={() => navigation.navigate('PoseDetail', { pose: item.data })}
      >
        <Image source={{ uri: item.data.image }} style={styles.poseImage} />
        <View style={styles.poseInfo}>
          <Text style={styles.poseName}>{item.data.name}</Text>
          <Text style={styles.poseDifficulty}>{item.data.difficulty}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <Text style={[
        styles.messageText,
        item.isBot ? styles.botText : styles.userText
      ]}>
        {item.text}
      </Text>
    )}
  </View>
));

const RecommendationsScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const scrollViewRef = useRef();
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    targetAreas: [],
    weightGoal: '',
  });


  

  const chatFlow = [
    { 
      question: "Welcome to YogAR Chatbot! Let's find perfect poses for you. First, how old are you?",
      field: 'age',
      inputType: 'number'
    },
    {
      question: "Great! What's your height in centimeters?",
      field: 'height',
      inputType: 'number'
    },
    {
      question: "And your weight in kg?",
      field: 'weight',
      inputType: 'number'
    },
    {
      question: "Which body areas would you like to focus on? (Choose multiple)",
      field: 'targetAreas',
      inputType: 'multi-select',
      options: ['Arms', 'Legs', 'Core', 'Back', 'Flexibility', 'Balance']
    },
    {
      question: "Finally, is your main goal to lose weight or gain muscle?",
      field: 'weightGoal',
      inputType: 'single-select',
      options: ['Lose Weight', 'Gain Muscle']
    }
  ];

  useEffect(() => {
    if (currentStep === 0) {
      addBotMessage(chatFlow[0].question);
    }
  }, []);

  const calculateBMI = (height, weight) => {
    if (!height || !weight) return null;
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

    const getRecommendations = () => {
    const { height, weight, age, targetAreas, weightGoal } = formData;




    const bmi = calculateBMI(height, weight);

    let recommendedPoses = yogaPoses.filter(pose => 
      formData.targetAreas?.length > 0 ?  // Add null check
      formData.targetAreas.some(area => pose.focus.includes(area)) :
      yogaPoses // Return all if no target areas selected
    );

    if (weightGoal === 'lose') {
      recommendedPoses = recommendedPoses.filter(pose => pose.intensity === 'High');
    } else if (weightGoal === 'gain') {
      recommendedPoses = recommendedPoses.filter(pose => 
        pose.intensity === 'Medium' || pose.intensity === 'High'
      );
    }

    if (age > 50) {
      recommendedPoses = recommendedPoses.filter(pose => 
        pose.difficulty !== 'Advanced' && pose.intensity !== 'High'
      );
    }

    recommendedPoses.sort((a, b) => {
      if (weightGoal === 'lose') return b.calories - a.calories;
      return a.difficulty.localeCompare(b.difficulty);
    });

    return recommendedPoses.slice(0, 5);
  };

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isBot: true,
      isQuestion: true
    }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isBot: false
    }]);
  };

  const handleResponse = (value) => {
    const currentField = chatFlow[currentStep].field;
    const formattedValue = currentField === 'targetAreas' ? value :
      ['age', 'height', 'weight'].includes(currentField) ? 
      Number(value) : value;

    setFormData(prev => ({ ...prev, [currentField]: formattedValue }));
    
    addUserMessage(
      Array.isArray(formattedValue) ? 
      formattedValue.join(', ') : 
      formattedValue.toString()
    );
    
    if (currentStep < chatFlow.length - 1) {
      const nextStep = currentStep + 1;
      setIsBotTyping(true);
      setTimeout(() => {
        setCurrentStep(nextStep);
        addBotMessage(chatFlow[nextStep].question);
        setIsBotTyping(false);
      }, 1500);
    } else {
      showRecommendations();
    }
  };

  const showRecommendations = () => {
    const recommendations = getRecommendations();
    navigation.navigate('RecommendedPoses', { 
      recommendations,
      formData
    });
  };

  <Text style={styles.title}>Recommended Yoga Poses</Text>

  const renderInput = () => {
    const current = chatFlow[currentStep];
    
    if (current.inputType === 'number') {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            keyboardType="numeric"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={() => {
              handleResponse(input);
              setInput('');
            }}
          />
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={() => {
              handleResponse(input);
              setInput('');
            }}
          >
            <Text style={styles.sendText}>↑</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (current.inputType === 'multi-select') {
      return (
        <View style={styles.optionsContainer}>
          {current.options.map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                formData.targetAreas.includes(option) && styles.selectedOption
              ]}
              onPress={() => {
                const newAreas = formData.targetAreas.includes(option)
                  ? formData.targetAreas.filter(a => a !== option)
                  : [...formData.targetAreas, option];
                setFormData(prev => ({...prev, targetAreas: newAreas}));
              }}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleResponse(formData.targetAreas)} // Remove .join(', ')
            >
              <Text style={styles.submitText}>Done</Text>
            </TouchableOpacity>
        </View>
      );
    }

    if (current.inputType === 'single-select') {
      return (
        <View style={styles.optionsContainer}>
          {current.options.map(option => (
            <TouchableOpacity
              key={option}
              style={styles.optionButton}
              onPress={() => handleResponse(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    return null;
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.isBot ? styles.botMessage : styles.userMessage
    ]}>
      {item.isRecommendation ? (
        <TouchableOpacity 
          style={styles.recommendationCard}
          onPress={() => navigation.navigate('PoseDetail', { pose: item.data })}
        >
          <Image source={{ uri: item.data.image }} style={styles.poseImage} />
          <View style={styles.poseInfo}>
            <Text style={styles.poseName}>{item.data.name}</Text>
            <Text style={styles.poseDifficulty}>{item.data.difficulty}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text style={[
          styles.messageText,
          item.isBot ? styles.botText : styles.userText
        ]}>
          {item.text}
        </Text>
      )}
    </View>
  );

return (
  <View style={styles.container}>
    <Text style={styles.title}>Personalized Yoga Chatbot</Text>
    <StatusBar barStyle="dark-content" />

    {/* Chat Interface */}
    <View style={styles.chatContainer}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.messagesContainer}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      >
        {messages.map((message) => (
          <MessageComponent key={message.id} item={message} />
        ))}
        {isBotTyping && <ThinkingAnimation />}
      </ScrollView>

      {currentStep < chatFlow.length && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputArea}
        >
          {renderInput()}
        </KeyboardAvoidingView>
      )}
    </View>

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
        <Text style={styles.navText}>CONTACT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Recommendations")}
      >
        <Text style={[styles.navText, styles.navTextActive]}>RECOMMEND</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3faf8',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#233e3e', paddingTop: 35, paddingLeft: 10 },
  chatContainer: {
    flex: 1, // Takes up all available space above the navigation menu
  },
  
  messagesContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#233e3e',
  },
  messageText: {
    fontSize: 16,
  },
  botText: {
    color: '#233e3e',
  },
  userText: {
    color: 'white',
  },
  inputArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sendButton: {
    backgroundColor: '#233e3e',
    borderRadius: 20,
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: 'white',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    backgroundColor: '#f0f4f8',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedOption: {
    backgroundColor: '#233e3e',
  },
  optionText: {
    color: '#233e3e',
  },
  submitButton: {
    backgroundColor: '#233e3e',
    borderRadius: 20,
    padding: 12,
    marginTop: 8,
  },
  submitText: {
    color: 'white',
    fontWeight: '600',
  },
  recommendationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 4,
  },
  poseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  poseInfo: {
    flex: 1,
  },
  poseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#233e3e',
  },
  poseDifficulty: {
    fontSize: 14,
    color: '#3f8c85',
  },
    thinkingContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#233e3e',
    marginHorizontal: 4,
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

export default RecommendationsScreen;
