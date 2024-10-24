import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { kontak } from "./components/DataTugas1";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter-Light": require("./assets/fonts/Inter_18pt-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter_18pt-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={"light-content"} />
      <Image
        style={styles.profile}
        source={require("./assets/tugas1/afif 1.png")}
      />
      <View style={styles.title}>
        <Text style={styles.namDepan}>
          Muhammad <Text style={styles.namaBelakang}>Afiffudin</Text>
        </Text>
        <Text style={styles.deskripsi}>Mobile Developer</Text>
      </View>
      <Text
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Portofolio
      </Text>
      <View style={styles.portofolio}>
        <Image
          style={styles}
          source={require("./assets/tugas1/iPhone 16 Pro - 1 1.png")}
        />
        <Image
          style={styles}
          source={require("./assets/tugas1/iPhone 16 Pro - 1 1.png")}
        />
      </View>
      <Text
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 20,
          marginTop: 20,
          marginBottom: 16,
        }}
      >
        Kontak Saya
      </Text>
      {kontak.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => Linking.openURL(item.url)}
        >
          <Image source={item.image} style={styles.icon} />
          <Text style={styles.text}>{item.nama}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 29 },
  profile: {
    width: 152,
    height: 152,
    marginTop: 56,
    alignSelf: "center",
    borderRadius: 152 / 2,
  },
  title: {
    marginTop: 29,
    justifyContent: "center",
    alignItems: "center",
  },
  namDepan: { fontFamily: "Inter-Regular", fontSize: 24 },
  namaBelakang: { fontFamily: "Inter-Bold", fontSize: 24 },
  deskripsi: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
  portofolio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  item: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  icon: {
    width: 34,
    height: 34,
    marginRight: 13,
  },
});
