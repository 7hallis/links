import { View, TextInput, TextInputProps } from "react-native";
import { styles } from "./style";
import { colors } from "@/styles/colors";
export default function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}
