import {
  Button,
  Input,
  Layout,
  Text
} from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
} from "react-native";

// import { FlatListExample } from "@/components/FlatListExample";
import { SectionListExample } from "@/components/SectionListExample";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);
  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      <Layout style={{ alignItems: "center" }}>
        <Image
        style={{ width: 150, height: 150, borderRadius: 75 }}
        source={require("@/assets/images/avatar.jpg")}
        resizeMode="cover"
      />
      <Button
        appearance="ghost"
          onPress={() => setShowDetails(!showDetails)}
          style={{ marginTop: 30 }}
      >
        <Text numberOfLines={showDetails ? 0 : 1} category="s1">
          Este é um App de exemplo da disciplina Programação Web e Mobile do
          Curso de Ciência da Computação da Universidade Católica de Pernambuco
          (semestre 2025.2)
        </Text>
      </Button>
      {!isNaN(anoNasc) && <Text category="p1" style={{ marginTop: 20 }}>Você nasceu em {anoNasc}</Text>}
      <Input
          placeholder="Qual a sua idade?"
          value={idade}
          onChangeText={onChangeIdade}
          keyboardType="numeric"
          style={{ width: 200, marginTop: 20 }}
      />
      <Layout
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 250,
            marginTop: 20,
          }}
        >
          <Button onPress={() => alert("Botão OK pressionado")}>OK</Button>
          <Button onPress={() => alert("Botão Cancel pressionado")}>Cancel</Button>
        </Layout>
      <Button
          style={{ marginTop: 20 }}
          onPress={() => router.navigate("/taskList")}
        >
          Ir para Lista de Tarefas
        </Button>
      <Layout style={{ height: 70 }} />
      </Layout>
      
    </ScrollView>
  );
}

// Exemplos de Listas
function App() {
  // return <FlatListExample />;
  return <SectionListExample />;
}