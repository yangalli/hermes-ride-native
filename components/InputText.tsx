import { Input } from "@ui-kitten/components";
import { TextInput } from "react-native";
import { useController } from "react-hook-form";

interface Props {
  name: any;
  control: any;
  style: any;
  placeholder: string;
}

const InputText = ({ name, control, style, placeholder }: Props) => {
  const { field } = useController({ control, defaultValue: "", name: name });

  return (
    <Input
      placeholder={placeholder}
      style={style}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};

export default InputText;
