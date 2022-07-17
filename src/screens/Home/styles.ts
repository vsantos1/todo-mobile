import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: red;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding-left: 22px;
  padding-right: 22px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 24px;
  font-weight: 600;
`;

export const AddTodo = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: 32px;
  border-radius: 4px;
`;

export const AnyTaskAvaiable = styled.View`
  flex: 1;
  margin-bottom: 80%;
  align-items: center;
`;

export const NoTasksAvailable = styled.Text`
  font-size: 36px;
  text-align: center;
`;
export const MakeNewTask = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;
