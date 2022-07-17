import styled from "styled-components/native";

export const Cards = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
  height: 10%;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  flex: 1;
  z-index: 10;
`;

export const CardContent = styled.View`
  height: 80px;
  align-items: center;
  flex-direction: row;
  margin-left: 8px;
  justify-content: space-around;
`;

export const DeleteTodo = styled.TouchableOpacity``;
export const EditTodo = styled.TouchableOpacity``;
export const TaskStatus = styled.Text``;
export const TaskName = styled.Text`
  flex-wrap: wrap;
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
`;
