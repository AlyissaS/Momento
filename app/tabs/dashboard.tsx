import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth'; // Mobile Auth
import { webAuth } from "@/firebaseConfig1"; // Web Auth

export default function DashboardScreen() {
  const isWeb = typeof window !== "undefined";
  const user = isWeb ? webAuth.currentUser : auth().currentUser;

  const signOutUser = async () => {
    try {
      if (isWeb) {
        // Sign out for web
        await webAuth.signOut();
      } else {
        // Sign out for mobile
        await auth().signOut();
      }
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.dashboardscreen}>
      <Text style={styles.welcomeUser}>Welcome {user?.email}</Text>
      <View style={styles.rectangleParent}>
        <TouchableOpacity style={styles.button} onPress={signOutUser}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.weAreSo}>
        We are so glad to have you here! Click on the pictures below to get started
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardscreen: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeUser: {
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    fontFamily: "Belgrano-Regular",
    marginBottom: 20,
  },
  rectangleParent: {
    height: 60,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#2d4962',
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Belgrano-Regular",
  },
  weAreSo: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
    fontFamily: "Belgrano-Regular",
    marginTop: 0,
  },
});
