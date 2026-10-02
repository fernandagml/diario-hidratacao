import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from '../constants/colors';

export function WaterGoal({ onAdd, onExc, goal, onReset }) {

    return (
        <View style={styles.card}>
            <Text style={styles.titleText}>Ajustar Meta Diária:</Text>
            <View style={styles.buttonRow}>
                <Pressable style={styles.button} onPress={() => onAdd(200)}>
                    <Text style={styles.buttonText}>+200 mL</Text>
                </Pressable>
                <Text style={styles.goalText}>{goal}mL</Text>
                <Pressable style={styles.button} onPress={() => onExc(200)}>
                    <Text style={styles.buttonText}>-200 mL</Text>
                </Pressable>
            </View>
            <Pressable style={styles.goalButton} onPress={() => onReset(2000)}>
                <Text style={styles.goalButtonText}>Manter 2000mL</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.cardBg,
        borderRadius: 16,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    titleText: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginBottom: 16,
    },
    buttonRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 8,
        marginBottom: 5,
    },
    button: {
        flex: 1,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.secondary,
        fontWeight: 'bold',
        fontSize: 14,
    },
    goalText: {
        color: COLORS.textMuted,
        fontWeight: 'bold',
        fontSize: 18,
    },
    goalButton: {
        width: '100%',
        backgroundColor: COLORS.cardBg,
        borderWidth: 1,
        borderColor: COLORS.danger,
        borderRadius: 10,
        paddingVertical: 8,
        alignItems: 'center',
    }
});