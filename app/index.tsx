import { StyleSheet, View } from "react-native";
import ActivitySelector from "@/components/ActivitySelector";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ActivitySelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
    paddingTop: 100,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
  },
});
