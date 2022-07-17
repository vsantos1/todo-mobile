import React, { useState } from "react";
import { ModalView, ModalWrapper, ModalAdd, ModalButtons, ButtonAdd, ButtonCancel, ModalHint, TextAdd } from "./styles";
import { ModalTextInput } from "../ModalEdit/styles";

interface ModalCardProps {
  isModalVisible: boolean;
  handleAddNewTask: () => void;
}

export function ModalCardAddTask({ isModalVisible, handleAddNewTask }: ModalCardProps) {
  const [addNewTask, setAddNewTask] = useState<String>("");

  function AddTaskAndClose() {
    setAddNewTask(addNewTask);
    handleAddNewTask();
  }
  return (
    <ModalWrapper>
      <ModalAdd animationType="fade" transparent={true} visible={isModalVisible}>
        <ModalView>
          <ModalHint>Add new task, dont be lazy!</ModalHint>
          <ModalTextInput onChangeText={(event) => setAddNewTask(event)} placeholder="Add some tasks" />
          <ModalButtons>
            <ButtonCancel onPress={handleAddNewTask}>
              <ModalHint>CANCEL</ModalHint>
            </ButtonCancel>

            <ButtonAdd onPress={handleAddNewTask}>
              <TextAdd>ADD</TextAdd>
            </ButtonAdd>
          </ModalButtons>
        </ModalView>
      </ModalAdd>
    </ModalWrapper>
  );
}
