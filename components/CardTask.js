import { Button, Switch, View, Text } from "react-native";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <View>
      <Text>{task.description}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={"#f5dd4b"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onCheck(task)}
        value={task.done}
      />
      <Button title="X" onPress={() => onDelete(task.objectId)} />
    </View>
  );
}
