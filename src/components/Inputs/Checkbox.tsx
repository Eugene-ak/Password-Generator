import { CheckboxContainer, CheckboxLabel, CheckboxStyle } from "./Checkbox.style";

export default function Checkbox({ name, displayText }: { name: string, displayText: string}) {
  return (
    <CheckboxContainer>
      <CheckboxStyle type="checkbox" name={name} id="ckeckbox" />
      <CheckboxLabel htmlFor={name}>{displayText}</CheckboxLabel>
    </CheckboxContainer>
  )
}
