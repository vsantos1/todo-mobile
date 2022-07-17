import styled from "styled-components/native";

export const ModalWrapper = styled.View`
  z-index: 99;
  flex: 1;
`;
export const ModalEdit = styled.Modal`
  flex: 1;
`;
export const ModalView = styled.View`
  background-color: #fafafa;
  margin-top: 50%;
  align-items: center;
  justify-content: space-around;
  height: 240px;
  margin-left: 17px;
  margin-right: 17px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
  padding: 10px;
  border-radius: 4px;
`;
export const ModalTextInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
  border-radius: 4px;
  width: 90%;
  height: 20%;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ModalText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
export const TaskNameEdit = styled.Text`
  font-size: 22px;
  margin-bottom: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;
export const ModalButtons = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  margin: 4px;
  padding: 10px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  margin: 4px;
  padding: 10px;
  border-radius: 10px;
`;

export const TextEdit = styled.Text`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT_THIRD};
`;
