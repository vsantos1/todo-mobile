import styled from "styled-components/native";

export const ModalWrapper = styled.View`
  z-index: 99;
  flex: 1;
`;

export const ModalDelete = styled.Modal`
  flex: 1;
`;

export const ModalView = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
  align-items: center;
  margin-top: 50%;
  height: 240px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  margin-left: 17px;
  margin-right: 17px;
  padding: 20px;
  z-index: 99;
  justify-content: space-between;
  border-radius: 4px;
`;

export const ModalHint = styled.Text`
  font-size: 24px;
  flex-direction: row;
  padding: 4px;
`;
export const TaskNameDelete = styled.Text`
  font-size: 14px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  margin-top: -8px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 10px;
  margin: 4px;
  border-radius: 10px;
  background-color: red;
  border: 1px solid #dbdbdb;
`;

export const TextDelete = styled.Text`
  font-size: 22px;
  flex-direction: row;
  padding: 2px;
  color: #fafafa;
  font-weight: 500;
`;

export const ButtonCancel = styled.TouchableOpacity`
  padding: 10px;
  margin: 4px;
`;

export const TextCancel = styled.Text`
  font-size: 22px;
  flex-direction: row;
  padding: 2px;
  color: #111;
  font-weight: 500;
`;
