import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import {Stack, useRouter } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() =>{
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false,}}/>
      {user ? (
         <Stack.Screen name="(tabs)" options={{headerShown:false,}}/>
      ) : (
        <Stack.Screen name="login" options={{presentation:'modal', title:'', headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close-outline" size={28} />
          </TouchableOpacity>
        ),
        }}/>
      )}
      <Stack.Screen name="signup" options={{presentation:'modal', title:'', headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close-outline" size={28} />
          </TouchableOpacity>
        ),
        }}/>
    </Stack>
  );
}
