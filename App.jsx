import { View, StyleSheet, StatusBar } from "react-native";
import { useState } from "react";
import { COLORS } from './src/constants/colors';
import { Header } from "./src/components/Header";
import { ActionButton } from "./src/components/ActionButtons";
import { WaterProgress } from "./src/components/WaterProgress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const GOAL = 2000;
  const [consumed, SetConsumed] = useState(0);

  const handleAddWater = (amount) => { };
  const handleReset = () => { };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />

        <View>
          <Header />
          <ActionButton />
          <WaterProgress />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );

  const styles = StyleSheet.create({});
};