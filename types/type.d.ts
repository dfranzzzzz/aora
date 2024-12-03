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

declare interface VideoCardProps {
  video: {
    title: string;
    thumbnail: string;
    video: string;
    creator: {
      username: string;
      avatar: string;
    };
  };
}

declare interface TrendingItemProps {
  activeItem: any;
  item: {
    $id: string;
    thumbnail: string;
    video: string;
  };
}
