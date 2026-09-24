import { View, Text, StyleSheet } from "react-native";

export function WaterProgress({ waterProgress = 0, goal }) {

    const percentage = Math.min(Math.floor((waterProgress / goal) * 100), 100);

    const styles = StyleSheet.create({
        bar: {
            width: '100%',
            height: '20',
            backgroundColor: '#dfdfdf',
        },
        barPerc: {
            width: percentage + '%',
            height: '20',
            backgroundColor: '#2d82c9',
        },
    })
    return (
        <View>
            <Text>Você bebeu {waterProgress}mL de água hoje.</Text>
            <Text>Você atingiu {percentage}% da meta!</Text>
            <View style={styles.bar}>
                <View style={styles.barPerc} />
            </View>
        </View>
    )
}