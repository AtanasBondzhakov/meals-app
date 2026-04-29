import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
            android_ripple={{ color: '#ccc' }}
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        backgroundColor: '#ccc',
        height: 150,
        borderRadius: 8, 
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        overflow: 'hidden'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.6
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
    }
});