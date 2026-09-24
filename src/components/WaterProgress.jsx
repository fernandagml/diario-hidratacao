import { View, Text, StyleSheet } from "react-native";

export function WaterProgress({ waterProgress = 0, objetivo }) {

    const porcentagem = Math.min(Math.round((waterProgress / objetivo) * 100), 100);

    const styles = StyleSheet.create({
        barra: {
            width: '100%',
            height: '20',
            backgroundColor: '#dfdfdf',
        },
        barraPerc: {
            width: porcentagem + '%',
            height: '20',
            backgroundColor: '#2d82c9',
        },
    })
    return (
        <View>
            <Text>Você bebeu {waterProgress}mL de água hoje.</Text>
            <Text>Você atingiu {porcentagem}% da meta!</Text>
            <View style={styles.barra}>
                <View style={styles.barraPerc} />
            </View>
        </View>
    )
}