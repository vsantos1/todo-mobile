import React, { useState } from "react";
import { ModalWrapper, ModalView, ModalEdit, ModalButtons, ButtonCancel, ButtonEdit, ModalText, ModalTextInput, TaskNameEdit, TextEdit } from "./styles";
interface ModalCardProps {
  isModalVisible: boolean;
  handleEditRequest: () => void;
  taskName: string;
}

export function ModalCardEdit({ taskName, isModalVisible, handleEditRequest }: ModalCardProps) {
  const [newTodoName, setNewTodoName] = useState<String>(taskName);

  function EditTaskAndClose() {
    setNewTodoName(newTodoName);
    handleEditRequest();
  }

  return (
    <ModalWrapper>
      <ModalEdit animationType="fade" visible={isModalVisible} transparent={true}>
        <ModalView>
          <TaskNameEdit>{newTodoName ? `${newTodoName}` : "The task name is empty!"}</TaskNameEdit>

          <ModalTextInput onChangeText={(event) => setNewTodoName(event)} placeholder="Change the task name" />
          <ModalButtons>
            <ButtonCancel onPress={handleEditRequest}>
              <ModalText> CANCEL</ModalText>
            </ButtonCancel>
            <ButtonEdit onPress={EditTaskAndClose}>
              <TextEdit>EDIT</TextEdit>
            </ButtonEdit>
          </ModalButtons>
        </ModalView>
      </ModalEdit>
    </ModalWrapper>
  );
}
