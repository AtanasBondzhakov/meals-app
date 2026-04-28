import { FlatList, StyleSheet, View } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile.js";

import { CATEGORIES } from "../data/dummy-data.js";

const renderCategoryItem = ({ item }) => {
    return <CategoryGridTile title={item.title} color={item.color} />
}

export default function CategoriesScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    }
})