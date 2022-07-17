import styled from "styled-components/native";

export const ModalWrapper = styled.View`
  flex: 1;
`;
export const ModalAdd = styled.Modal`
  flex: 1;
`;
export const ModalView = styled.View`
  margin-top: 50%;
  align-items: center;
  height: 240px;
  border: 1px solid black;
  margin-left: 17px;
  margin-right: 17px;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
`;

export const ModalHint = styled.Text`
  font-size: 24px;
  text-align: center;
  padding: 10px;
  font-weight: 500;
`;
export const ModalButtons = styled.View`
  flex-direction: row;
`;
export const ButtonCancel = styled.TouchableOpacity`
  margin: 4px;
`;
export const ButtonAdd = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin: 4px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
`;

export const TextAdd = styled.Text`
  font-size: 24px;
  padding: 10px;
  text-align: center;
  font-weight: 500;
`;
