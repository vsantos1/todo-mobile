import React, { useState } from "react";
import { Alert } from "react-native";
import { Warning } from "phosphor-react-native";
import { ModalDelete, ModalWrapper, ModalView, ModalButtons, ButtonDelete, ButtonCancel, ModalHint, TextCancel, TextDelete, TaskNameDelete } from "./styles";

interface ModalCardProps {
  isModalVisible: boolean;
  handleDeleteRequest: () => void;
  taskName: string;
}

export function ModalCardDelete({ taskName, isModalVisible, handleDeleteRequest }: ModalCardProps) {
  const [deleteTask, setDeletedTask] = useState();

  function fakeDelete() {
    handleDeleteRequest();
  }

  return (
    <ModalWrapper>
      <ModalDelete animationType="fade" transparent={true} visible={isModalVisible}>
        <ModalView>
          <ModalHint>
            <Warning color="#ee902c" weight="fill" size={32} /> This task below will be deleted, are you sure?
          </ModalHint>
          <TaskNameDelete>{taskName ? `${taskName}` : `The task name is empty!`}</TaskNameDelete>
          <ModalButtons>
            <ButtonCancel onPress={handleDeleteRequest}>
              <TextCancel> CANCEL </TextCancel>
            </ButtonCancel>
            <ButtonDelete onPress={fakeDelete}>
              <TextDelete> DELETE </TextDelete>
            </ButtonDelete>
          </ModalButtons>
        </ModalView>
      </ModalDelete>
    </ModalWrapper>
  );
}
