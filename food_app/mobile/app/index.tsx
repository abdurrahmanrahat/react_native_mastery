import { Image } from "expo-image";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello world</Text>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width: 100, height: 100 }}
      />
      <TextInput
        placeholder="Enter your email"
        style={{ borderWidth: 1, padding: 8 }}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text>Button</Text>
      </TouchableOpacity>
      <Link href={`/about`}>Link</Link>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
  },
});
