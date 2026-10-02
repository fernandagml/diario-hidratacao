import { View, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./src/constants/colors";
import { Header } from "./src/components/Header";
import { ActionButton } from "./src/components/ActionButtons";
import { WaterProgress } from "./src/components/WaterProgress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [consumed, setConsumed] = useState(0);
  const GOAL = 2000;

  const handleAddWater = (ml) => {
    setConsumed((memoria) => memoria + ml);
  };

  const handleReset = () => {
    setConsumed(0);
  };
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="auto" />

        <View style={styles.content}>
          <Header goal={GOAL}/>
          <WaterProgress goal={GOAL} waterProgress={consumed}/>
          <ActionButton onAdd={handleAddWater} onReset={handleReset}/>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});