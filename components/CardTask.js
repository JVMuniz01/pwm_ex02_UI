import { Button, Card, CheckBox, Text } from "@ui-kitten/components";


export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Card style={{ marginVertical: 5 }}>
      {/* Descrição da tarefa */}
      <Text category="s1" style={{ marginBottom: 10 }}>
        {task.description}
      </Text>

      {/* Marcar como feito */}
      <CheckBox
        checked={task.done}
        onChange={() => onCheck(task)}
        style={{ marginBottom: 10 }}
      >
        {task.done ? "Concluída" : "Pendente"}
      </CheckBox>

      {/* Botão de deletar */}
      <Button
        status="danger"
        onPress={() => onDelete(task.objectId)}
        style={{ alignSelf: "flex-end" }}
      >
        X
      </Button>
    </Card>
  );
}