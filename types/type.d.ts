import { TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  handlePress: () => void;
}
