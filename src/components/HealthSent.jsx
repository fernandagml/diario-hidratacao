import { StyleSheet, View, Text } from "react-native";
import { COLORS } from '../constants/colors'

export function HealthSent() {
    return (
        <View style={styles.card}>
            <Text style={styles.icon}>💡</Text>
            <View style={styles.clue}>
                <Text style={styles.titleText}>Dica de Saúde:</Text>
                <Text style={styles.clueText}>Beba água ao longo do dia para manter o corpo hidratado!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.cardBg,
        borderRadius: 16,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: 'row',
    },
    icon: {
        fontSize: 40,
        marginRight: 5,
    },
    clue: {
        width: 220,
    },
    titleText: {
        color: COLORS.textMain,
        fontWeight: 'bold',
        fontSize: 14,
    },
    clueText: {
        color: COLORS.textMain,
    }
})