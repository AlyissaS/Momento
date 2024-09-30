import { StyleSheet, View, Text, Pressable, TextInput, ActivityIndicator } from "react-native";
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { DATABASE, FIREBASE_AUTH } from "@/FirebaseConfig";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Use Firebase Auth
import { ref, set } from 'firebase/database';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { type } = useLocalSearchParams<{ type: string }>();
  
  // State for selected button
  const [selectedButton, setSelectedButton] = useState('');

  const signUp = async () => {
    setLoading(true);
    try {
      // Create user with email and password
      const auth = getAuth(); // Get the Auth instance
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Extract the user from the credential

      if (user) {
        const userId = user.uid;

        // Update the Firebase Realtime Database
        await set(ref(DATABASE, 'users/' + userId), {
          firstname: name,
          email: email,
          password: password,
          selectedButton: selectedButton,
          emailVerified: false,
          uid: userId,
          status: true,
          online: true,
        });

        console.log('User created and data stored successfully');
        alert('Check your emails!');
      }
    } catch (error: any) {
      console.log('Registration failed:', error.message);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonPress = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <>
      <View style={styles.registrationScreenPart2}>
        <Image style={[styles.ripplepic2Icon, styles.iconLayout]} contentFit="cover" source="assets/images/ripplepic.png" />
        <Image style={[styles.fishes1Icon, styles.iconLayout]} contentFit="cover" source="assets/images/fishes.png" />
        <SafeAreaView>
          <TextInput style={[styles.number, styles.emailPosition]} value={number} autoCapitalize="none" keyboardType="number-pad" onChangeText={setPhoneNumber} placeholder="Phone Number"/>
          <TextInput style={[styles.email, styles.emailPosition]} value={email} autoCapitalize="none" keyboardType="email-address" onChangeText={setEmail} placeholder="Email"/>
          <TextInput style={[styles.fullName, styles.emailPosition]} value={name} autoCapitalize="none" keyboardType="default" onChangeText={setName} placeholder="Full Name"/>
          <TextInput style={[styles.password, styles.emailPosition]} value={password} onChangeText={setPassword} secureTextEntry placeholder="Password"/>
        </SafeAreaView>
        <Text style={styles.signUp}>Sign Up</Text>
        <View style={styles.rectangleGroup}>
          <Text style={styles.areYouThe}>Are you the patient, primary caretaker or family member?</Text>
        </View>
        <View style={styles.buttonContainer}>
          {['Family Member', 'Caretaker', 'Patient'].map((label) => (
            <Pressable
              key={label}
              onPress={() => handleButtonPress(label)}
              style={[
                styles.button,
                { backgroundColor: selectedButton === label ? 'orange' : '#d9d9d9' }
              ]}
            >
              <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
          ))}
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="white"/>
        ) : (
          <View style={[styles.submitButton, styles.submitLayout]}>
            <Pressable style={[styles.submitButtonChild, styles.submitLayout]} onPress={signUp}>
              <Text style={[styles.submit]}>Sign Up</Text>
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
};
      			
      			const styles = StyleSheet.create({
					buttonContainer: {
						flexDirection: 'row', // Align buttons in a row
						justifyContent: 'space-between', // Space buttons evenly
						marginTop: 20, // Space between text and buttons
						width: '100%', // Full width
					},
					button: {
						flex: 1, // Allow buttons to grow
						marginHorizontal: 5, // Space between buttons
						height: 30,
						borderRadius: 10,
						justifyContent: "center",
						alignItems: "center",
					},
					buttonText: {
						color: "#000",
						fontSize: 14,
						fontFamily: "Belgrano-Regular",
					},
					container: {
						flex: 1,
						padding: 20,
					  },
					datePosition: {
						top:560,
					},
					emailPosition: {
						width: 349,
						left: 35,
						position: "absolute"
				  },
					iconLayout: {
					width: 430,
					position: "absolute"
					},
					emailLayout: {
					height: 23,
					width: 349,
					position: "absolute"
					},
					email1Layout: {
					height: 22,
					textAlign: "left"
					},
					groupLayout: {
					height: 25,
					borderRadius: 10,
					top: -25,
					backgroundColor: "#d9d9d9",
					position: "absolute"
					},
					maleTypo: {
					height: 11,
					fontSize: 11,
					top: -20,
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					position: "absolute"
					},
					groupChildPosition: {
					top: 70,
					height: 25,
					backgroundColor: "#d9d9d9",
					borderRadius: 10,
					position: "absolute"
					},
					groupChild1Layout: {
					width: 103,
					left: 242
					},
					patientFlexBox: {
					top: 75,
					height: 14,
					justifyContent: "center",
					fontSize: 11,
					textAlign: "center",
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					position: "absolute"
					},
					areYouThePosition: {
					left: 1,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					top: -60,
					},
					submitLayout: {
					height: 55,
					width: 345,
					position: "absolute"
					},
					ripplepic2Icon: {
					height: 349,
					left: 0,
					top: 0
					},
					fishes1Icon: {
					height: 430,
					left: 0,
					top: 0
					},
					registrationScreenPart2Child: {
					top: 210,
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
					backgroundColor: "#fffbfb",
					height: 722,
					width: 430,
					position: "absolute"
					},
					number: {
					top: 600,
					left: 34
					},
					email1: {
					width: 49,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					email: {
					top: 500,
					left: 35
					},
					fullName1: {
					width: 76,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					fullName: {
					top: 450,
					left: 35
					},
					password: {
					top: 550,
					left: 35
					},
					email2: {
					top: 555,
					left: 35
					},
					signUp: {
					top: 255,
					fontSize: 40,
					color: "#ff8e47",
					textAlign: "center",
					left: 35,
					fontFamily: "Belgrano-Regular",
					position: "absolute"
					},
					registrationScreenPart2Item: {
					top: 184,
					left: 198,
					width: 34,
					height: 12,
					position: "absolute"
					},
					groupChild: {
					width: 77,
					left: 0
					},
					groupItem: {
					left: 120,
					width: 77
					},
					groupInner: {
					left: 242,
					width: 103,
					},
					rectangleParent: {
					top: 597,
					width: 275,
					height: 53,
					left: 34,
					position: "absolute"
					},
					rectangleView: {
					width: 77,
					left: 0
					},
					groupChild1: {
					top: 70,
					height: 25,
					backgroundColor: "#d9d9d9",
					borderRadius: 10,
					position: "absolute"
					},
					groupChild2: {
					left: 121,
					width: 77,
					},
					familyMember: {
					width: 105,
					left: 242
					},
					caretaker: {
					left: 130,
					width: 59
					},
					patient: {
					left: 12,
					width: 53
					},
					areYouThe: {
					width: 370,
					height: 32,
					justifyContent: "center",
					left: 35,
					textAlign: "center"
					},
					rectangleGroup: {
						flexDirection: 'row', // Align children in a row
						justifyContent: 'space-between', // Space out buttons evenly
						alignItems: 'center', // Center vertically
						marginTop: 230, // Adjust as necessary
						width: '100%', // Use full width of the container
					},
					submitButtonChild: {
					borderRadius: 20,
					backgroundColor: "#ff8e47",
					shadowOpacity: 1,
					elevation: 4,
					shadowRadius: 4,
					shadowOffset: {
					width: 0,
					height: 4
					},
					shadowColor: "rgba(0, 0, 0, 0.25)",
					left: 0,
					top: 0
					},
					submit: {
						fontSize: 16,
            			justifyContent: "center",
            			alignItems: "center",
            			display: "flex",
            			color: "#000",
            			textAlign: "center",
            			fontFamily: "Belgrano-Regular",
            			left: 0,
            			top: 15
					},
					submitButton: {
					top: 700,
					left: 50
					},
					registrationScreenPart2: {
					backgroundColor: "#558cbf",
					flex: 1,
					width: "100%",
					height: 932,
					overflow: "hidden"
					}
					});
					