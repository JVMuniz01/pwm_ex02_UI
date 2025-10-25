import { StyleSheet, Text, View, SectionList, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const names = [
  "Daisy Lambert",
  "Mario Cummings",
  "Nylah Dickerson",
  "Flynn Costa",
  "Robin Kerr",
  "Louie Francis",
  "Daniella Kennedy",
  "Maxwell Jaramillo",
  "Guadalupe Avila",
  "Jaylen Morse",
  "Kairi Roach",
  "Caspian Crawford",
  "Aubree Hail",
  "Hector Palacios",
  "Bria Clay",
  "Yosef Juarez",
  "Juliet Ponce",
  "Langston Sanchez",
  "Aria Person",
  "Moses Leach",
  "Martha Ruiz",
  "Austin Vance",
  "Maxine Bates",
  "Ellis Wilcox",
  "Ashlyn Santos",
  "Walker Gilbert",
  "Jocelyn Phillips",
  "Andrew Ortiz",
  "Anna Rivers",
  "Bear Huffman",
  "Hayley Crosby",
  "Tristen Cisneros",
  "Janelle Meadows",
  "Wayne Hampton",
  "Leona Vang",
  "Jimmy Oliver",
  "Camille Kramer",
  "Kylan Cole",
  "Margaret Brewer",
  "Cruz Garza",
  "River Marquez",
  "Malakai McKinney",
  "Gwendolyn Hahn",
  "Kabir Jensen",
  "Jane Martin",
  "Mateo Ramos",
  "Alice Finley",
  "Calum Espinoza",
  "Lucille Levy",
  "Harold Gibbs",
];

const sectionNames = [];
(() => {
  names.forEach((name) => {
    const firstLetter = name[0];
    if (!sectionNames.find((value) => value.title === firstLetter)) {
      sectionNames.push({
        title: firstLetter,
        data: [],
      });
    }
    sectionNames.find((value) => value.title === firstLetter).data.push(name);
    sectionNames.sort((a, b) => a.title.localeCompare(b.title));
    sectionNames.forEach((section) => {
      section.data.sort();
    });
  });
})();

export const SectionListExample = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["top"]}>
      <SectionList
        sections={sectionNames}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
