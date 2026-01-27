import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const AboutPage = () => {
  return (
    <View>
      <Text>AboutPage</Text>
      <Link href={`/`}>Home</Link>
    </View>
  );
};

export default AboutPage;
