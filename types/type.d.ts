import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  handlePress: () => void;
}

declare interface FormFieldProps extends TextInputProps {
  title?: string;
  value?: any;
  placeholder?: string;
  handleChangeText?: (e: string) => void;
  otherStyles?: string;
}
