import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container, Title, Header, AddTodo, NoTasksAvailable, AnyTaskAvaiable, MakeNewTask } from "./styles";
import { Plus, SmileySad } from "phosphor-react-native";
import { Card } from "../../components/Card/";
import { api } from "../../lib/api";
import { ModalCardAddTask } from "../../components/ModalAddTask";

type arrayType = {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
};

const fakeArray: arrayType[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

export function Home() {
  const [AddNewTodo, setAddNewTodo] = useState(false);

  function AddNewTodoRequested() {
    setAddNewTodo(!AddNewTodo);
  }

  const [testData, setTestData] = useState([]);

  async function jsonData() {
    try {
      const res = await api.get("/todos");
      setTestData(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    // jsonData();
    // IF WANT USE JSON DATA
  }, []);

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
        <AddTodo onPress={AddNewTodoRequested}>
          <Plus size={32} weight="fill" />
        </AddTodo>
      </Header>
      <ModalCardAddTask isModalVisible={AddNewTodo} handleAddNewTask={AddNewTodoRequested} />

      {fakeArray.length > 0 ? (
        <FlatList initialNumToRender={10} showsVerticalScrollIndicator={false} data={fakeArray} renderItem={({ item }) => <Card task={item.title} status={item.completed} />} />
      ) : (
        <AnyTaskAvaiable>
          <SmileySad size={64} color="blue" />
          <NoTasksAvailable>Theres no task available </NoTasksAvailable>
          <MakeNewTask>Create new task</MakeNewTask>
        </AnyTaskAvaiable>
      )}
    </Container>
  );
}
