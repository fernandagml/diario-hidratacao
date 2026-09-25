import { View, Text, Button, Pressable } from "react-native";

export function ActionButton({  }) {

    return (
        <View>
            <Text>Adicionar consumo:</Text>
            <View>
                <Pressable onPress={}>
                    <Text>+200 mL</Text>
                </Pressable>
                <Pressable onPress={}>
                    <Text>+350 mL</Text>
                </Pressable>
                <Pressable onPress={}>
                    <Text>+500 mL</Text>
                </Pressable>
            </View>
            <Pressable>
                <Text>Reiniciar Dia</Text>
            </Pressable>
        </View>
    )
}