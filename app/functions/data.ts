import auth from '@react-native-firebase/auth'; // Mobile Firebase Auth
import { webAuth } from "@/firebaseConfig1"; // Your Firebase configuration for web
import { FIREBASE_AUTH } from '@/FirebaseConfig';


const getCurrentUser = () => {
    // Check if we're running on web or mobile
    if (typeof window !== "undefined") {
        // We're on the web
        return webAuth.currentUser; // Get the current user for web
    } else {
        // We're on mobile
        return FIREBASE_AUTH.currentUser; // Get the current user for mobile
    }
};

// Function to get user data safely
export const getUserData = () => {
    const user = getCurrentUser(); // Get the current user safely

    // Ensure user exists before accessing displayName
    if (user && typeof user.displayName === 'string') {
        return user.displayName; // Return the user's display name
    }
    
    return "Unknown"; // Return "Unknown" if user doesn't exist or displayName is not a string
};

export const quizData = [
    {
        question: "What is your name?",
        options: ["John", "Mary", getUserData(), "Jeff"], // Use the function to get the user's name
        answer: getUserData() // Use the function to get the user's name
    }
];
