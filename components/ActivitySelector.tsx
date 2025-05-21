import { View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

const activities = [
  { key: "run", icon: "running", label: "Run" },
  { key: "bike", icon: "bicycle", label: "Ride" },
  { key: "swim", icon: "swimmer", label: "Swim" },
  { key: "walk", icon: "walking", label: "Walk" },
];

export default function ActivitySelector() {
  const [selected, setSelected] = useState("run");
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      {activities.map((activity) => {
        const isActive = selected === activity.key;
        return (
          <Pressable
            key={activity.key}
            style={styles.item(isActive)}
            onPress={() => setSelected(activity.key)}
          >
            <FontAwesome5
              name={activity.icon}
              size={20}
              color={isActive ? theme.primary : theme.typographySecondary}
            />
            <Text style={styles.label(isActive)}>{activity.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  item: (isActive: boolean) => ({
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    width: 56,
    backgroundColor: "red",
  }),
  label: (isActive: boolean) => ({}),
}));
