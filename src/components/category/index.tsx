import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./style";

// tipagem para usar na página principal
// PressableProps todas as tipagens do Pressable & Props
type Categories = PressableProps & {
  id?: string;
  name: string;
  isSelected: boolean;
  //   tipagem para usar icon
  icon: keyof typeof MaterialIcons.glyphMap;
};
// ...rest pegar todas as propriedades
export function Category({ name, icon, isSelected, ...rest }: Categories) {
  //   verificação para ver se item está selecionado e muda a cor e passar o "color"
  const color = isSelected ? colors.green[300] : colors.gray[400];
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
