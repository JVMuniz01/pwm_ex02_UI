import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Input, Layout, Text } from "@ui-kitten/components";
import { useState } from "react";
import { FlatList } from "react-native";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();
  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  if (!data) {
    return <Text>No data available</Text>;
  }
  return (
    <Layout style={{ flex: 1, padding: 15 }}>
      <Text category="h1" style={{ marginBottom: 20 }}>Task List</Text>
      <Layout style={{ flexDirection: "row", marginBottom: 10 }}>
        <Input
          placeholder="Add a task"
          value={description}
          onChangeText={setDescription}
          style={{ flex: 1, marginRight: 10 }}
        />
        <Button onPress={() => addMutation.mutate({ description })}>
          Add
        </Button>
      </Layout>
      <Divider style={{ marginVertical: 10 }} />
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item: task }) => (
          <CardTask
            key={task.objectId}
            task={task}
            onDelete={deleteMutation.mutate}
            onCheck={updateMutation.mutate}
          />
        )}
      />
      {isPending && (
        <Text category="s1" style={{ marginTop: 10 }}>
          Pending...
        </Text>
      )}
    </Layout>
  );
}
