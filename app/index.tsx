import { View,StyleSheet } from "react-native";
import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLoginSheet from "@/components/BottomLoginSheet";
import { SafeAreaProvider} from "react-native-safe-area-context";

export default function Index() {
  return (
      <View style={styles.container}>
        <SafeAreaProvider>
        <AnimatedIntro />
        <BottomLoginSheet/>
        </SafeAreaProvider>
      </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});