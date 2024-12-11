import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
    label : string;
    type : string;
    placeholder : string;
    defaultValue : string | undefined
    name : string;
}

const FormInput = ({label,name,type,placeholder,defaultValue}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1">
        <Label className="capitalize text-xl" htmlFor={name}>
          {label || name}
        </Label>
        <Input type={type} placeholder={placeholder} defaultValue={defaultValue ?? ""} name={name} id={name} />

    </div>
  )
}
export default FormInput