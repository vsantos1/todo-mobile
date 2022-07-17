import React, { useEffect, useState } from "react";
import { CardContent, Cards, DeleteTodo, EditTodo, TaskName, TaskStatus } from "./styles";
import { shadow } from "../../Global/shadow";
import { Trash, PencilLine, CheckCircle, X, XCircle } from "phosphor-react-native";
import { ModalCardDelete } from "../ModalDelete";
import { ModalCardEdit } from "../ModalEdit";
import { TouchableOpacity } from "react-native";
import { ModalCardAddTask } from "../ModalAddTask";

type CardProps = {
  task: string;
  status: boolean;
  onDeleteTaskRequested?: () => void;
};

export function Card({ task, status }: CardProps) {
  const [requestedDelete, setRequestedDelete] = useState(false);
  const [requestedEdit, setRequestedEdit] = useState(false);
  const [isCompleted, setIsCompleted] = useState<Boolean>(status);

  function DeleteRequested() {
    setRequestedDelete(!requestedDelete);
  }
  function EditRequested() {
    setRequestedEdit(!requestedEdit);
  }

  function changeStatus() {
    setIsCompleted(!isCompleted);
  }

  return (
    <Cards style={shadow.cardShadow}>
      <CardContent>
        <TouchableOpacity onPress={changeStatus}>
          <TaskStatus>{isCompleted ? <CheckCircle color="#3ba53f" weight="fill" size={32} /> : <XCircle color="#e94245" weight="fill" size={30} />}</TaskStatus>
        </TouchableOpacity>
        <TaskName> {task}</TaskName>
        <EditTodo activeOpacity={0.5} onPress={EditRequested}>
          <PencilLine color="#b9bbbd" size={32} weight="fill" />
        </EditTodo>
        <DeleteTodo activeOpacity={0.5} onPress={DeleteRequested}>
          <Trash color="#e94245" size={32} weight="fill" />
        </DeleteTodo>
      </CardContent>
      <ModalCardDelete taskName={task} isModalVisible={requestedDelete} handleDeleteRequest={DeleteRequested} />
      <ModalCardEdit taskName={task} isModalVisible={requestedEdit} handleEditRequest={EditRequested} />
    </Cards>
  );
}
