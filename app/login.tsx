import {StyleSheet, View, Text, Pressable,TextInput, ActivityIndicator} from "react-native";
import { Image } from 'expo-image';
import { useState } from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import {router, useLocalSearchParams } from 'expo-router';
import { FIREBASE_AUTH } from "@/FirebaseConfig";


export default function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const { type } = useLocalSearchParams<{ type: string }>();
	const auth = FIREBASE_AUTH;

	const signIn = async () => {
		setLoading(true);
		try {
			const response = await signInWithEmailAndPassword(auth,email,password);
			console.log(response);
			router.navigate('/tabs/dashboard')
		} catch(error : any){
			console.log(error);
			alert('Sign in failed:' + error.message);
		} finally {
			setLoading(false);
		}
	}
  	return (
		
      <View style={styles.loginScreen}>
      <View style={[styles.form, styles.formLayout]}>
      <View style={[styles.formChild, styles.formLayout]} />
      <Text style={[styles.forgotPassword, styles.logIn1FlexBox]}>Forgot password?</Text>
      <View style={[styles.logIn, styles.logLayout]}>
      <View style={[styles.logInChild, styles.logLayout]} />
	  {loading ? (
		<ActivityIndicator size="large" color="white"/>
	  ):(
		<Pressable style={[styles.logIn1, styles.logLayout]} onPress={signIn}>
        <Text style={styles.textLayout}>Log In</Text>
      </Pressable>
	  )}
      </View>
      <TextInput style={[styles.password, styles.emailPosition]} value={password} onChangeText={setPassword} secureTextEntry placeholder="Password">
        </TextInput>
        <TextInput style={[styles.email, styles.emailPosition]} value={email} autoCapitalize="none" keyboardType="email-address" onChangeText={setEmail} placeholder="Email">
        </TextInput>
      <Text style={styles.logIn2}>Log In</Text>
      </View>
      <Image style={styles.loginpicIcon} contentFit="cover" source="assets/images/loginpic.png" />
      </View>
	  );
        				};
        				
        				const styles = StyleSheet.create({
							container: {
								flex: 1,
								padding: 20,
							  },
                  textLayout: {
                    textAlign:'center',
                    marginBottom: 30
                  },
          					formLayout: {
            						height: 600,
            						width: 430,
            						left: 0,
            						position: "absolute"
          					},
          					googleLayout: {
            						height: 37,
            						width: 118,
            						position: "absolute"
          					},
          					childPosition: {
            						borderRadius: 20,
            						top: 0,
            						left: 0
          					},
          					logIn1FlexBox: {
            						justifyContent: "center",
            						alignItems: "center",
            						display: "flex",
            						color: "#000",
            						textAlign: "center",
            						fontFamily: "Belgrano-Regular",
            						left: 0
          					},
          					logLayout: {
            						height: 55,
            						width: 345,
            						position: "absolute"
          					},
          					emailPosition: {
            						width: 349,
            						left: 35,
            						position: "absolute"
          					},
          					childLayout: {
            						height: 1,
            						width: 350,
            						borderTopWidth: 1,
            						borderColor: "#000",
            						borderStyle: "solid",
            						left: 0,
            						position: "absolute"
          					},
          					email1Typo: {
            						fontSize: 14,
            						alignItems: "center",
            						display: "flex",
            						textAlign: "left",
            						color: "#000",
            						fontFamily: "Belgrano-Regular",
            						top: 0,
            						left: 0,
            						position: "absolute"
          					},
          					formChild: {
            						shadowColor: "rgba(0, 0, 0, 0.25)",
            						shadowOffset: {
              							width: 0,
              							height: 4
            						},
            						shadowRadius: 4,
            						elevation: 4,
            						shadowOpacity: 1,
            						borderTopLeftRadius: 40,
            						borderTopRightRadius: 40,
            						backgroundColor: "#fffbfb",
            						top: 0
          					},
          					dontHaveAn: {
            						color: "#000"
          					},
          					signUp: {
            						color: "#ff8e47"
          					},
          					text: {
            						textAlign: "center",
            						fontFamily: "Belgrano-Regular",
            						fontSize: 12
          					},
          					dontHaveAnContainer: {
            						left: 121,
            						top: 472,
            						position: "absolute"
          					},
          					googleChild: {
            						backgroundColor: "#e7e7e7",
            						height: 37,
            						width: 118,
            						position: "absolute"
          					},
          					google1: {
            						top: 9,
            						left: 45,
            						width: 66,
            						height: 19,
            						alignItems: "center",
            						display: "flex",
            						textAlign: "left",
            						color: "#000",
            						fontFamily: "Belgrano-Regular",
            						fontSize: 12,
            						position: "absolute"
          					},
          					vectorIcon: {
            						top: 8,
            						left: 17,
            						width: 19,
            						height: 21,
            						position: "absolute"
          					},
          					forgotPassword: {
            						top: 390,
            						height: 22,
            						fontSize: 12,
            						justifyContent: "center",
            						width: 430,
            						position: "absolute"
          					},
          					logInChild: {
            						backgroundColor: "#ff8e47",
            						borderRadius: 20,
            						top: 0,
            						left: 0
          					},
          					logIn1: {
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
          					logIn: {
                      top: 312,
                      left: 39
                      },
          					passwordChild: {
            						top: 18
          					},
          					password1: {
            						width: 81,
            						height: 10
          					},
          					password: {
            						top: 238,
            						height: 30
          					},
          					emailChild: {
            						top: 23
          					},
          					email1: {
            						width: 49,
            						height: 22
          					},
          					email: {
            						top: 155,
            						height: 23
          					},
          					logIn2: {
                      top: 46,
                      fontSize: 40,
                      left: 35,
                      color: "#ff8e47",
                      textAlign: "center",
                      fontFamily: "Belgrano-Regular",
                      position: "absolute"
          					},
          					form: {
            						top: 332
          					},
          					loginpicIcon: {
            						width: 432,
            						height: 332,
            						top: 0,
            						left: 0,
            						position: "absolute"
          					},
          					loginScreen: {
            						backgroundColor: "#558cbf",
            						flex: 1,
            						width: "100%",
            						height: 934,
            						overflow: "hidden"
          					}
        				});
        				