import { View, StyleSheet, StatusBar, Text } from "react-native";
// import { COLORS } from './src/constants/colors';
import { Header } from "./src/components/Header";
import { ActionButton } from "./src/components/ActionButtons";
import { WaterProgress } from "./src/components/WaterProgress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const GOAL = 2000;
  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="auto" />

        <View>
          <Header goal={GOAL}/>
          {/*
          <ActionButton />*/}
          <WaterProgress goal={GOAL} waterProgress={200}/>
          <ActionButton />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )

};