import { View, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./src/constants/colors";
import { Header } from "./src/components/Header";
import { ActionButton } from "./src/components/ActionButtons";
import { WaterProgress } from "./src/components/WaterProgress";
import { WaterGoal } from "./src/components/WaterGoal";
import { HealthSent } from "./src/components/HealthSent";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [consumed, setConsumed] = useState(0);
  const [goal, setGoal] = useState(2000);

  const handleAddWater = (ml) => {
    setConsumed(consumed + ml);
  };

  const handleReset = () => {
    setConsumed(0);
  };

  const handleAddGoal = (ml) => {
    setGoal(goal + ml)
  }

  const handleExcGoal = (ml) => {
    setGoal(goal - ml)
  }

  const handleResetGoal = (ml) => {
    setGoal(2000)
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="auto" />

        <View style={styles.content}>
          <Header goal={goal}/>
          <WaterGoal onAdd={handleAddGoal} onExc={handleExcGoal} goal={goal} onReset={handleResetGoal}/>
          <WaterProgress goal={goal} waterProgress={consumed}/>
          <ActionButton onAdd={handleAddWater} onReset={handleReset}/>
          <HealthSent />
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